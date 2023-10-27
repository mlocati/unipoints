<?php

declare(strict_types=1);

namespace MLUnipoints\Build;

use MLUnipoints\Category;
use MLUnipoints\Info\PlaneInfo;
use RuntimeException;
use ValueError;

/**
 * @see https://www.unicode.org/reports/tr44/#UnicodeData.txt
 */
class CodepointsBuilder
{
    private readonly DataStorage $dataStorage;
    private readonly BlocksBuilder $blocksBuilder;

    /**
     * @var \MLUnipoints\Build\CodepointsBuilder\Codepoint[]|null
     */
    private ?array $codepoints = null;

    public function __construct(
        public readonly string $unicodeVersion,
        ?DataStorage $dataStorage = null,
        ?BlocksBuilder $blocksBuilder = null,
    ) {
        $this->dataStorage = $dataStorage ?? DataStorage::getInstance();
        $this->blocksBuilder = $blocksBuilder ?? new BlocksBuilder(
            unicodeVersion: $this->unicodeVersion,
            dataStorage: $this->dataStorage,
        );
    }

    /**
     * @return \MLUnipoints\Build\CodepointsBuilder\Codepoint[]
     */
    public function getCodepoints(): array
    {
        return $this->codepoints ??= $this->createCodepoints();
    }

    public function saveAllCodepoints(string $directory = '', ?string $namespace = null): void
    {
        if ($directory !== '') {
            $directory = rtrim(str_replace(DIRECTORY_SEPARATOR, '/', $directory), '/') . '/';
        }
        if ($namespace !== null) {
            $namespace = trim($namespace, '\\');
        }
        $this->saveCodepoints($directory === '' ? '' : "{$directory}Codepoint.php", $namespace);
        foreach ($this->blocksBuilder->getBlocks() as $block) {
            $this->saveCodepoints($directory === '' ? '' : "{$directory}Codepoint/{$block->codename}.php", $namespace === null ? null : "{$namespace}\\Codepoint", $block);
        }
    }

    public function saveCodepoints(string $filename = '', ?string $namespace = null, ?BlocksBuilder\Block $onlyForBlock = null): bool
    {
        $code = $this->createPHPCode($namespace, $onlyForBlock);
        if ($code === '') {
            return false;
        }
        if ($filename === '') {
            $filename = str_replace(DIRECTORY_SEPARATOR, '/', realpath(__DIR__ . '/../src'));
            if ($onlyForBlock === null) {
                $filename .= '/Codepoint.php';
            } else {
                $filename .= "/Codepoint/{$onlyForBlock->codename}.php";
            }
        }
        $dirname = dirname($filename);
        if ($dirname && !is_dir($dirname) && !@mkdir($dirname)) {
            throw new RuntimeException("Failed to create directory {$dirname}");
        }
        if (file_put_contents($filename, $code) !== strlen($code)) {
            throw new RuntimeException("Failed to save codepoints to file {$filename}");
        }

        return true;
    }


    /**
     * @return \MLUnipoints\Build\CodepointsBuilder\Codepoint[]
     */
    protected function createCodepoints(): array
    {
        $unicodeData = $this->createUnicodeData();
        $namesList = $this->createNamesList();
        $nameAliases = $this->createNameAliases();

        $allCodepoints = array_unique(array_merge(
            array_keys($unicodeData),
            array_keys($namesList),
            array_keys($nameAliases),
        ), SORT_NUMERIC);
        sort($allCodepoints, SORT_NUMERIC);

        $result = [];
        foreach ($allCodepoints as $codepoint) {
            $item = $this->createCodepoint(
                (int) $codepoint,
                $unicodeData[$codepoint] ?? null,
                $namesList[$codepoint] ?? null,
                $nameAliases[$codepoint] ?? null,
            );
            if ($item !== null) {
                $result[] = $item;
            }
        }

        return $result;
    }

    protected function createCodepoint(
        int $codepoint,
        ?CodepointsBuilder\UnicodeData $unicodeData,
        ?CodepointsBuilder\Name $name,
        ?CodepointsBuilder\NameAlias $nameAlias,
    ): ?CodepointsBuilder\Codepoint {
        if ($unicodeData === null) {
            if ($nameAlias === null) {
                if ($name === null) {
                    return null;
                }
                if ($name->nameIsPseudo && $name->aliases === [] && $name->formalAliases === [] && in_array($name->name, ['reserved', 'not a character'], true)) {
                    return null;
                }
            }
            throw new RuntimeException("Missing codepoint {$codepoint} in UnicodeData");
        }

        if ($name === null) {
            if ($nameAlias === null && $unicodeData->nameIsPseudo && $unicodeData->unicode1Name === '') {
                $codepointName = $unicodeData->name;
            } else {
                throw new RuntimeException("Missing codepoint {$codepoint} in NamesList");
            }
        } elseif ($name->nameIsPseudo) {
            if (($controlNames = $nameAlias?->getAliases(CodepointsBuilder\NameAlias\Type::Control) ?? []) !== []) {
                $codepointName = $controlNames[0];
            } elseif (($figmentNames = $nameAlias?->getAliases(CodepointsBuilder\NameAlias\Type::Figment) ?? []) !== []) {
                $codepointName = $figmentNames[0];
            } else {
                throw new RuntimeException("Unable to determine the name of the codepoint {$codepoint}");
            }
        } else {
            $codepointName = $unicodeData->name;
        }
        $block = $this->blocksBuilder->getBlockForCodepoint($codepoint);
        if ($block === null) {
            throw new RuntimeException("Block not found for codepoint {$codepoint}");
        }

        return new CodepointsBuilder\Codepoint(
            codepoint: $codepoint,
            name: $codepointName,
            category: $unicodeData->category,
            block: $block,
        );
    }

    /**
     * @return \MLUnipoints\Build\CodepointsBuilder\UnicodeData[]
     */
    protected function createUnicodeData(): array
    {
        $result = [];
        foreach ($this->dataStorage->readUnicodeData($this->unicodeVersion) as $line) {
            [$codepoint, $info] = $this->createUnicodeDataItem($line);
            if (isset($result[$codepoint])) {
                throw new RuntimeException("Duplicated codepoint {$codepoint} in UnicodeData");
            }
            $result[$codepoint] = $info;
        }

        return $result;
    }

    protected function createUnicodeDataItem(string $line): array
    {
        $chunks = explode(';', $line);
        try {
            $codepoint = $this->shiftHex($chunks);
            // 1 Name (Miscellaneous, Normative)
            $name = array_shift($chunks);
            // 2 General_Category (Enumeration, Normative)
            $category = Category::from(array_shift($chunks));
            // 3 Canonical_Combining_Class (Numeric, Normative)
            array_shift($chunks);
            // 4 Bidi_Class (Enumeration, Normative)
            array_shift($chunks);
            // 5 Decomposition_Type/Decomposition_Mapping (Enumeration/String-valued, Normative)
            array_shift($chunks);
            // 6 Numeric_Type/Numeric_Value (Enumeration/Numeric, Normative)
            array_shift($chunks);
            // 7 Numeric_Type/Numeric_Value (Enumeration/Numeric, Normative)
            array_shift($chunks);
            // 8 Numeric_Type/Numeric_Value (Enumeration/Numeric, Normative)
            array_shift($chunks);
            // 9 Bidi_Mirrored (Binary, Normative)
            $this->shiftBinary($chunks);
            // 10 Unicode_1_Name (Miscellaneous, Informative)
            $unicode1Name = array_shift($chunks);
            // 11 ISO_Comment (Miscellaneous, Informative)
            array_shift($chunks);
            // 12 Simple_Uppercase_Mapping (String-valued, Normative)
            array_shift($chunks);
            // 13 Simple_Lowercase_Mapping (String-valued, Normative)
            array_shift($chunks);
            // 14 Simple_Titlecase_Mapping (String-valued, Normative)
            $simpleTitlecaseCaseMapping = array_shift($chunks);
            if ($chunks !== [] || $simpleTitlecaseCaseMapping === null) {
                throw new ValueError();
            }
        } catch (ValueError $_) {
            throw new RuntimeException("Malformed line in UnicodeData.txt:\n{$line}");
        }
        $nameIsPseudo = str_starts_with($name, '<') && str_ends_with($name, '>');
        if ($nameIsPseudo) {
            $name = substr($name, 1, -1);
        }

        return [
            $codepoint,
            new CodepointsBuilder\UnicodeData(
                name: $name,
                nameIsPseudo: $nameIsPseudo,
                category: $category,
                unicode1Name: $unicode1Name,
            ),
        ];
    }

    /**
     * @return \MLUnipoints\Build\CodepointsBuilder\Name[]
     *
     * @see https://unicode.org/Public/UNIDATA/NamesList.html
     */
    protected function createNamesList(): array
    {
        $result = [];
        $section = null;
        $addResult = function (array $section) use (&$result): void {
            [$codepoint, $info] = $this->createName($section);
            if (isset($result[$codepoint])) {
                throw new RuntimeException("Duplicated codepoint {$codepoint} in NamesList");
            }
            $result[$codepoint] = $info;
        };
        $match = null;
        $rxNameLine = '/^(?<char>[0-9A-F]{4,6})\t(?<name>.+)$/';
        foreach ($this->dataStorage->readNamesList($this->unicodeVersion) as $line) {
            if (preg_match($rxNameLine, $line, $match)) {
                if ($section !== null) {
                    $addResult($section);
                }
                $section = [
                    'codepoint' => hexdec($match['char']),
                    'name' => $match['name'],
                    'aliases' => [],
                    'formalAliases' => [],
                ];
            } else {
                if ($section === null) {
                    continue;
                }
                if ($line[0] !== "\t") {
                    $addResult($section);
                    $section = null;
                } else {
                    switch ($line[1]) {
                        case '=': // ALIAS_LINE
                            $section['aliases'][] = substr($line, 3);
                            break;
                        case '%': // FORMALALIAS_LINE
                            $section['formalAliases'][] = substr($line, 3);
                            break;
                        case '*': // COMMENT_LINE
                        case 'x': // CROSS_REF
                        case '~': // VARIATION_LINE
                        case '#': // COMPAT_MAPPING
                        case ':': // DECOMPOSITION
                            break;
                        default:
                            throw new RuntimeException("Malformed line in NamesList:\n{$line}");
                    }
                }
            }
        }
        if ($section !== null) {
            $addResult($section);
        }

        return $result;
    }

    protected function createName(array $section): array
    {
        $nameIsPseudo = str_starts_with($section['name'], '<') && str_ends_with($section['name'], '>');
        $name = $nameIsPseudo ? substr($section['name'], 1, -1) : $section['name'];

        return [
            $section['codepoint'],
            new CodepointsBuilder\Name(
                name: $name,
                nameIsPseudo: $nameIsPseudo,
                aliases: $section['aliases'],
                formalAliases: $section['formalAliases'],
            ),
        ];
    }

    /**
     * @return \MLUnipoints\Build\CodepointsBuilder\NameAlias[]
     */
    protected function createNameAliases(): array
    {
        $result = [];
        foreach ($this->dataStorage->readNameAliases($this->unicodeVersion) as $line) {
            [$codepoint, $info] = $this->createNameAlias($line);
            if (isset($result[$codepoint])) {
                $result[$codepoint]->add($info);
            } else {
                $result[$codepoint] = $info;
            }
        }

        return $result;
    }

    protected function createNameAlias(string $line): array
    {
        $match = null;
        if (!preg_match('/^(?<codepoint>[A-Za-z0-9]+);(?<alias>.+);(?<type>[\w]+)$/', $line, $match)) {
            throw new RuntimeException("Malformed line in AliasNames:\n{$line}");
        }
        try {
            $type = CodepointsBuilder\NameAlias\Type::from($match['type']);
        } catch (ValueError $_) {
            throw new RuntimeException("Malformed line in AliasNames:\n{$line}\nUnrecognized type {$match['type']}");
        }

        return [
            hexdec($match['codepoint']),
            CodepointsBuilder\NameAlias::create($type, $match['alias']),
        ];
    }

    protected function createPHPCode(?string $namespace = null, ?BlocksBuilder\Block $onlyForBlock = null, bool $withOpeningTag = true): string
    {
        if ($namespace === null) {
            $namespace = 'MLUnipoints';
            if ($onlyForBlock !== null) {
                $namespace .= '\\Codepoint';
            }
        } else {
            $namespace = trim($namespace, '\\');
        }
        $myClass = get_class($this);
        if ($withOpeningTag) {
            $result = "<?php\n\n";
        } else {
            $result = '';
        }
        $result .= <<<EOT
/*
 * Please DO NOT edit this file manually!
 * It has been generated automatically by {$myClass}
 */

declare(strict_types=1);

EOT
        ;
        if ($namespace !== '') {
            $result .= "\nnamespace {$namespace};\n\n";
        }
        $unicodeVersion = var_export($this->unicodeVersion, true);
        $enumName = $onlyForBlock === null ? 'Codepoint' : $onlyForBlock->codename;
        $result .= <<<EOT
use MLUnipoints\Category as Cat;
use MLUnipoints\Info\CodepointInfo as Info;
use MLUnipoints\Info\UnicodeInfo;

#[UnicodeInfo(unicodeVersion: {$unicodeVersion})]
enum {$enumName}: string
{

EOT
        ;
        $previousCodepoint = null;
        $someFound = false;
        foreach ($this->getCodepoints() as $codepoint) {
            if ($onlyForBlock === null || $codepoint->block === $onlyForBlock) {
                $someFound = true;
                $result .= $this->createPHPCodeForCodepoint($codepoint, $previousCodepoint, $onlyForBlock !== null);
                $previousCodepoint = $codepoint;
            }
        }
        $result .= "}\n";

        return $someFound ? str_replace("\r\n", "\n", $result) : '';
    }

    protected function createPHPCodeForCodepoint(CodepointsBuilder\Codepoint $codepoint, ?CodepointsBuilder\Codepoint $previousCodepoint, bool $isBlockFile): string
    {
        $indent = str_repeat(str_repeat(' ', 4), 1);
        $lines = [];
        if ($previousCodepoint !== null) {
            $lines[] = '';
        }
        if (!$isBlockFile) {
            if ($previousCodepoint === null || $previousCodepoint->block->plane !== $codepoint->block->plane) {
                $planeInfo = PlaneInfo::from($codepoint->block->plane);
                $lines[] = "{$indent}// Plane: {$codepoint->block->plane->value} ({$planeInfo->name}}";
                $lines[] = '';
            }
            if ($previousCodepoint === null || $previousCodepoint->block !== $codepoint->block) {
                $lines[] = "{$indent}// Block: {$codepoint->block->name}";
                $lines[] = '';
            }
        }
        $name = var_export($codepoint->name, true);
        $block = $isBlockFile ? '' : ", block: Block::{$codepoint->block->codename}";
        $lines[] = "{$indent}#[Info(id: {$codepoint->codepoint}, name: {$name}{$block}, category: Cat::{$codepoint->category->name})]";
        $hexCodepoint = strtoupper(dechex($codepoint->codepoint));
        $char = '"\\u{' . $hexCodepoint . '}"';
        $lines[] = "{$indent}case {$codepoint->codename} = {$char};";

        return implode("\n", $lines) . "\n";
    }

    /**
     * @param string[] $chunks
     *
     * @throws \ValueError
     */
    protected function shiftHex(array &$chunks): int
    {
        $value = array_shift($chunks);
        if ($value === null || !preg_match('/^[0-9A-Fa-f]+$/', $value)) {
            throw new ValueError();
        }

        return hexdec($value);
    }

    /**
     * @param string[] $chunks
     *
     * @throws \ValueError
     */
    protected function shiftBinary(array &$chunks): bool
    {
        $value = array_shift($chunks);

        return match($value) {
            'N' => false,
            'Y' => true,
            default => throw new ValueError(),
        };
    }
}
