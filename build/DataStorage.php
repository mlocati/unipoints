<?php

declare(strict_types=1);

namespace MLUnipoints\Build;

use Generator;
use RuntimeException;

class DataStorage
{
    private const FLAG_ENDSWITHEOF = 0b1;
    private const FLAG_TRIM = 0b10;
    private const FLAG_SKIP_EMPTY_LINES = 0b100;
    private const FLAG_STRIP_HASHCOMMENTS = 0b1000;

    private static ?self $instance = null;

    /**
     * @throws \RuntimeException
     */
    public static function getInstance(): self
    {
        return static::$instance ??= new static();
    }

    public static function setInstance(self $instance): void
    {
        static::$instance = $instance;
    }

    private string $latestVersion = '';

    protected readonly FilesystemCache $cache;

    public function __construct(
        protected readonly string $baseUrl = 'https://www.unicode.org/Public/',
        ?FilesystemCache $cache = null,
    ) {
        $this->cache = $cache ?? FilesystemCache::getInstance();
    }

    /**
     * @throws \RuntimeException
     */
    public function getLatestVersion(): string
    {
        if ($this->latestVersion === '') {
            $blocks = $this->fetchFileContents('UNIDATA/Blocks.txt', self::FLAG_ENDSWITHEOF);
            $match = null;
            if (!preg_match('/^\s*#[ \t]*Blocks-(?<version>[1-9][0-9]*(\.[\w\-]+)*)*\.txt(\s|$)/m', $blocks, $match)) {
                throw new RuntimeException('Failed to detect the latest version');
            }
            $this->latestVersion = $match['version'];
        }

        return $this->latestVersion;
    }

    /**
     * @throws \RuntimeException
     *
     * @return string[]
     */
    public function readBlocks(string $version): Generator
    {
        return $this->readDataFile($version, 'Blocks.txt', self::FLAG_TRIM | self::FLAG_STRIP_HASHCOMMENTS | self::FLAG_SKIP_EMPTY_LINES | self::FLAG_ENDSWITHEOF);
    }

    /**
     * @throws \RuntimeException
     *
     * @return string[]
     */
    public function readUnicodeData(string $version): Generator
    {
        return $this->readDataFile($version, 'UnicodeData.txt', self::FLAG_TRIM | self::FLAG_STRIP_HASHCOMMENTS | self::FLAG_SKIP_EMPTY_LINES);
    }

    /**
     * @throws \RuntimeException
     *
     * @return string[]
     */
    public function readNamesList(string $version, bool $skipComments = true): Generator
    {
        return $this->readDataFile($version, 'NamesList.txt', self::FLAG_SKIP_EMPTY_LINES);
    }

    /**
     * @throws \RuntimeException
     *
     * @return string[]
     */
    public function readNameAliases(string $version, bool $skipComments = true): Generator
    {
        return $this->readDataFile($version, 'NameAliases.txt', self::FLAG_TRIM | self::FLAG_STRIP_HASHCOMMENTS | self::FLAG_SKIP_EMPTY_LINES);
    }

    protected function readDataFile(string $version, string $relativeUrl, int $flags): Generator
    {
        $path = $this->ensureCachedFile($version, $relativeUrl, $flags);
        $fd = fopen($path, 'r');
        if (!$fd) {
            throw new RuntimeException("Failed to open file {$path}");
        }
        try {
            $lineIndex = -1;
            while (true) {
                $lineIndex++;
                $line = fgets($fd);
                if ($line === false) {
                    if (!feof($fd)) {
                        throw new RuntimeException("Failed to read file {$path}");
                    }
                    break;
                }
                if (($flags & self::FLAG_TRIM) === self::FLAG_TRIM) {
                    $line = trim($line);
                } else {
                    $line = rtrim($line, "\r\n");
                }
                if ($line === '') {
                    if (($flags & self::FLAG_SKIP_EMPTY_LINES) === self::FLAG_SKIP_EMPTY_LINES) {
                        continue;
                    }
                } else {
                    if (($flags & self::FLAG_STRIP_HASHCOMMENTS) === self::FLAG_STRIP_HASHCOMMENTS && $line[0] === '#') {
                        continue;
                    }
                }
                yield $lineIndex => $line;
            }
        } finally {
            fclose($fd);
        }
    }

    protected function ensureCachedFile(string $version, string $filename, int $flags): string
    {
        $versionDir = $this->cache->getDirectory("unicode-{$version}");
        $filepath = "{$versionDir}/{$filename}";
        if (!is_file($filepath)) {
            $contents = $this->fetchFileContents("{$version}/ucd/{$filename}", $flags);
            if (file_put_contents($filepath, $contents) !== strlen($contents)) {
                throw new RuntimeException("Failed to save file {$filepath}");
            }
        }

        return $filepath;
    }

    protected function fetchFileContents(string $relativeUrl, int $flags): string
    {
        $url = "{$this->baseUrl}{$relativeUrl}";
        set_error_handler(static function () {}, -1);
        try {
            $contents = file_get_contents($url);
        } finally {
            restore_error_handler();
        }
        if ($contents === false) {
            throw new UserMessageException("Failed to download file {$url}");
        }
        if (($flags & self::FLAG_ENDSWITHEOF) === self::FLAG_ENDSWITHEOF) {
            $lines = preg_split('/[\r\n]+/', substr($contents, -50), -1, PREG_SPLIT_NO_EMPTY);
            $lastLine = trim(array_pop($lines));
            if (!preg_match('/^#\s*EOF$/i', $lastLine)) {
                throw new RuntimeException("Failed to fully download file {$url}");
            }
        }

        return $contents;
    }
}
