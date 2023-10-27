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
    public function __construct(
        public readonly int $id,
        public readonly string $name,
        public readonly Category $category,
        public readonly ?Block $block = null,
    ) {}

    public static function from(BackedEnum $codepoint): self
    {
        $reflection = new ReflectionEnumBackedCase($codepoint, $codepoint->name);

        return $reflection->getAttributes(self::class)[0]->newInstance();
    }
}
