<?php

declare(strict_types=1);

namespace MLUnipoints\Build\CodepointsBuilder;

use RuntimeException;

class VariantList
{
    private array $collection = [];

    /**
     * @throws \RuntimeException
     */
    public function add(int $baseCodepoint, VariantInfo $info): void
    {
        if (isset($this->collection[$baseCodepoint])) {
            if (isset($this->collection[$baseCodepoint][$info->variantCodepoint])) {
                throw new RuntimeException("Duplicated variant {$info->variantCodepoint} for base codepoint {$baseCodepoint}");
            }
            $this->collection[$baseCodepoint][$info->variantCodepoint] = $info;
        } else {
            $this->collection[$baseCodepoint] = [$info->variantCodepoint => $info];
        }
    }

    /**
     * @return \MLUnipoints\Build\CodepointsBuilder\VariantInfo
     */
    public function getVariants(int $baseCodepoint): array
    {
        return array_values($this->collection[$baseCodepoint] ?? []);
    }
}
