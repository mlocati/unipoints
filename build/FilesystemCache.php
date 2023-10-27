<?php

declare(strict_types=1);

namespace MLUnipoints\Build;

use RuntimeException;

class FilesystemCache
{
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

    public readonly string $rootDirectory;

    /**
     * @throws \RuntimeException
     */
    public function __construct(
        string $rootDirectory = '',
    ) {
        if ($rootDirectory === '') {
            $rootDirectory = sys_get_temp_dir() . '/MLUnipoints';
        }
        if (!is_dir($rootDirectory)) {
            @mkdir($rootDirectory, 0o770, true);
            if (!is_dir($rootDirectory)) {
                throw new RuntimeException("Failed to create directory {$rootDirectory}");
            }
        }
        $this->rootDirectory = rtrim(str_replace(DIRECTORY_SEPARATOR, '/', $rootDirectory), '/');
    }

    public function getDirectory(string $key): string
    {
        $this->validateKey($key);
        $path = "{$this->rootDirectory}/{$key}";
        if (!is_dir($path) && !mkdir($path)) {
            throw new RuntimeException("Failed to create directory {$path}");
        }

        return $path;
    }

    public function deleteDirectory(string $key): void
    {
        $this->validateKey($key);
        $this->delete("{$this->rootDirectory}/{$key}");
    }

    /**
     * @throws \RuntimeException
     */
    protected function validateKey(string $key): void
    {
        if (!preg_match('/^\w[\w\-\.]*$/', $key)) {
            throw new RuntimeException("Invalid cache key: '{$key}'");
        }
    }

    protected function delete(string $path): void
    {
        if (is_file($path) || is_link($path)) {
            if (!@unlink($path)) {
                throw new RuntimeException("Failed to delete file/link '{$path}'");
            }
            return;
        }
        foreach (scandir($path) as $item) {
            if ($item !== '.' && $item !== '..') {
                $this->delete("{$path}/{$item}");
            }
        }
        if (!@rmdir($path)) {
            throw new RuntimeException("Failed to delete directory '{$path}'");
        }
    }
}
