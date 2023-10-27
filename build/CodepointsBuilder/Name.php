<?php

declare(strict_types=1);

namespace MLUnipoints\Build\CodepointsBuilder;

class Name
{
    public function __construct(
        public readonly string $name,
        public readonly bool $nameIsPseudo,
        /** @var string[] */
        public readonly array $aliases = [],
        /** @var string[] */
        public readonly array $formalAliases = [],
    ) {}
}
