<?php

declare(strict_types=1);

namespace MLUnipoints\Build\CodepointsBuilder;

use MLUnipoints\Category;

class UnicodeData
{
    public function __construct(
        public readonly string $name,
        public readonly bool $nameIsPseudo,
        public readonly Category $category,
        public readonly string $unicode1Name,
    ) {}
}
