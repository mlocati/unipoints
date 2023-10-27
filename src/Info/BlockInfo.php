<?php

declare(strict_types=1);

namespace MLUnipoints\Info;

use MLUnipoints\Block;
use MLUnipoints\Plane;
use ReflectionEnumUnitCase;

#[\Attribute(\Attribute::TARGET_CLASS_CONSTANT)]
class BlockInfo
{
    public function __construct(
        public readonly int $fromCodepoint,
        public readonly int $toCodepoint,
        public readonly string $name,
        public readonly Plane $plane,
    ) {}

    public static function from(Block $block): self
    {
        $reflection = new ReflectionEnumUnitCase(Block::class, $block->name);

        return $reflection->getAttributes(self::class)[0]->newInstance();
    }
}
