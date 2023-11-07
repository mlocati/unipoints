<?php

declare(strict_types=1);

namespace MLUnipoints\Build\CodepointsBuilder;

use MLUnipoints\Build\BlocksBuilder\Block;
use MLUnipoints\Category;
use MLUnipoints\Info\CodepointInfo;

class Codepoint
{
    public readonly string $codename;

    public function __construct(
        public readonly int $codepoint,
        public readonly string $name,
        public readonly array $otherNames,
        public readonly Category $category,
        public readonly Block $block,
    ) {
        $this->codename = CodepointInfo::buildCodename($this->name);
    }
}
