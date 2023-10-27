<?php

declare(strict_types=1);

namespace MLUnipoints\Info;

use ReflectionClass;

#[\Attribute(\Attribute::TARGET_CLASS)]
class UnicodeInfo
{
    public function __construct(
        public readonly string $unicodeVersion,
    ) {}

    public static function from(string $className): ?self
    {
        $reflection = new ReflectionClass($className);
        $properties = $reflection->getAttributes(self::class);

        return $properties === [] ? null : $properties[0]->newInstance();
    }
}
