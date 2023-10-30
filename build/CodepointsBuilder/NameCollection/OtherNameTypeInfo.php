<?php

declare(strict_types=1);

namespace MLUnipoints\Build\CodepointsBuilder\NameCollection;

use ReflectionEnumUnitCase;

#[\Attribute(\Attribute::TARGET_CLASS_CONSTANT)]
class OtherNameTypeInfo
{
    public function __construct(
        public readonly string $exportHandle,
        public readonly bool $plural,
    ) {}

    public static function from(OtherNameType $otherNameType): self
    {
        $reflection = new ReflectionEnumUnitCase(OtherNameType::class, $otherNameType->name);

        return $reflection->getAttributes(self::class)[0]->newInstance();
    }
}
