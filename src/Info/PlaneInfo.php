<?php

declare(strict_types=1);

namespace MLUnipoints\Info;

use MLUnipoints\Plane;
use ReflectionEnumBackedCase;

#[\Attribute(\Attribute::TARGET_CLASS_CONSTANT)]
class PlaneInfo
{
    public function __construct(
        public readonly int $fromCodepoint,
        public readonly int $toCodepoint,
        public readonly string $name = '',
        public readonly string $shortName = '',
        public readonly bool $unassigned = false,
    ) {}

    public static function from(Plane $plane): self
    {
        $reflection = new ReflectionEnumBackedCase(Plane::class, $plane->name);

        return $reflection->getAttributes(self::class)[0]->newInstance();
    }
}
