<?php

declare(strict_types=1);

namespace MLUnipoints\Build\BlocksBuilder;

use MLUnipoints\Info\BlockInfo;
use MLUnipoints\Plane;

class Block
{
    public readonly string $codename;

    public function __construct(
        public readonly int $fromCodepoint,
        public readonly int $toCodepoint,
        public readonly string $name,
        public readonly Plane $plane,
    ) {
        $this->codename = BlockInfo::buildCodename($this->name);
    }
}
