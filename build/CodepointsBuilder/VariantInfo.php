<?php

declare(strict_types=1);

namespace MLUnipoints\Build\CodepointsBuilder;

class VariantInfo
{
    public function __construct(
        public readonly int $variantCodepoint,
        public readonly string $name,
        public readonly string $description,
    ) {}
}
