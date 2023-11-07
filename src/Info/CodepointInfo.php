<?php

declare(strict_types=1);

namespace MLUnipoints\Info;

use BackedEnum;
use MLUnipoints\Block;
use MLUnipoints\Category;
use ReflectionEnumBackedCase;

#[\Attribute(\Attribute::TARGET_CLASS_CONSTANT)]
class CodepointInfo
{
    public readonly string $codename;

    public function __construct(
        public readonly int $id,
        public readonly string $name,
        public readonly Category $category,
        public readonly ?Block $block = null,
        /**
         * Old name as published in Unicode 1.0 or ISO 6429 names for control functions (if differs from the current name).
         */
        public readonly string $unicode1Name = '',
        /**
         * Formal, unique, and stable alternate name for a character.
         *
         * @var string[]
         */
        public readonly array $formalAliases = [],
        /**
         * Aliases that may serve as useful alternate choices for identifying characters in user interfaces.
         *
         * @var string[]
         */
        public readonly array $informativeAliases = [],
        /**
         * Corrections for serious problems in the character names.
         *
         * @var string[]
         */
        public readonly array $correctedNames = [],
        /**
         * ISO 6429 names for C0 and C1 control functions, and other commonly occurring names for control codes.
         *
         * @var string[]
         */
        public readonly array $controlNames = [],
        /**
         * A few widely used alternate names for format characters.
         *
         * @var string[]
         */
        public readonly array $alternateNames = [],
        /**
         * Several documented labels for C1 control code points which were never actually approved in any standard.
         *
         * @var string[]
         */
        public readonly array $figments = [],
        /**
         * Commonly occurring abbreviations (or acronyms) for control codes, format characters, spaces, and variation selectors.
         *
         * @var string[]
         */
        public readonly array $abbreviations = [],
    ) {
        $this->codename = self::buildCodename($this->name);
    }

    public static function from(BackedEnum $codepoint): self
    {
        $reflection = new ReflectionEnumBackedCase($codepoint, $codepoint->name);

        return $reflection->getAttributes(self::class)[0]->newInstance();
    }

    /**
     * @internal
     */
    public static function buildCodename(string $name): string
    {
        return strtr($name, [
            ', ' => '__',
            ' -' => '__',
            ' ' => '_',
            '-' => '_',
        ]);
    }
}
