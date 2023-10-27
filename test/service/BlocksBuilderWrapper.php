<?php

declare(strict_types=1);

namespace MLUnipoints\Test\Service;

use MLUnipoints\Build\BlocksBuilder;

class BlocksBuilderWrapper extends BlocksBuilder
{
    /**
     * {@inheritdoc}
     *
     * @see \MLUnipoints\Build\BlocksBuilder::createPHPCode()
     */
    public function createPHPCode(?string $namespace = null, bool $withOpeningTag = true): string
    {
        return parent::createPHPCode($namespace, $withOpeningTag);
    }
}
