<?php

declare(strict_types=1);

namespace MLUnipoints\Build\CodepointsBuilder;

use MLUnipoints\Build\CodepointsBuilder\NameAlias\Type;

class NameAlias
{
    private array $list = [];

    private function __construct() {}

    public static function createEmpty(): self
    {
        return new self();
    }

    public static function create(Type $type, string $alias): self
    {
        $result = new self();
        $result->list[] = [$type, $alias];

        return $result;
    }

    /**
     * @return $this
     */
    public function add(self $other): self
    {
        $this->list = array_merge($this->list, $other->list);

        return $this;
    }

    /**
     * @return \MLUnipoints\Build\CodepointsBuilder\NameAlias\Type[]
     */
    public function getTypes(): array
    {
        $result = [];
        foreach ($this->list as $item) {
            if (!in_array($item[0], $result, true)) {
                $result[] = $item[0];
            }
        }

        return $result;
    }

    /**
     * @return string[]
     */
    public function getAliases(Type $type): array
    {
        $result = [];
        foreach ($this->list as $item) {
            if ($item[0] === $type && !in_array($item[1], $result, true)) {
                $result[] = $item[1];
            }
        }

        return $result;
    }
}
