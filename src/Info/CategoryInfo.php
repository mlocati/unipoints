<?php

declare(strict_types=1);

namespace MLUnipoints\Info;

use MLUnipoints\Category;
use ReflectionEnumBackedCase;

#[\Attribute(\Attribute::TARGET_CLASS_CONSTANT)]
class CategoryInfo
{
    public function __construct(
        public readonly string $description = '',
        /** @var \MLUnipoints\Category[] */
        public readonly array $parentCategories = [],
        /** @var \MLUnipoints\Category[] */
        public readonly array $childCategories = [],
    ) {}

    public static function from(Category $category): self
    {
        $reflection = new ReflectionEnumBackedCase(Category::class, $category->name);

        return $reflection->getAttributes(self::class)[0]->newInstance();
    }
}
