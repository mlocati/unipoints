<?php

declare(strict_types=1);

namespace MLUnipoints\Test;

use MLUnipoints\Category;
use MLUnipoints\Info\CategoryInfo;
use PHPUnit\Framework\TestCase;
use ReflectionEnum;
use ReflectionEnumBackedCase;

final class CategoryEnumTest extends TestCase
{
    private static ReflectionEnum $categoryClass;
    /** @var \MLUnipoints\Category[] */
    private static array $categories;


    /**
     * {@inheritdoc}
     *
     * @see \PHPUnit\Framework\TestCase::setUpBeforeClass()
     */
    public static function setUpBeforeClass(): void
    {
        self::$categoryClass ??= new ReflectionEnum(Category::class);
        self::$categories ??= array_map(
            static fn(ReflectionEnumBackedCase $case): Category => $case->getValue(),
            self::$categoryClass->getCases()
        );
    }

    public static function provideCategories(): array
    {
        self::setUpBeforeClass();

        return array_map(
            static fn(Category $category): array => [$category],
            self::$categories
        );
    }

    private static function initialize(): void {}
    public function testEnumType(): void
    {
        $type = self::$categoryClass->getBackingType();
        $this->assertNotNull($type);
        $this->assertTrue($type->isBuiltin());
        $this->assertSame('string', $type->getName());
    }

    /**
     * @dataProvider provideCategories
     */
    public function testChildrenFromParent(Category $category): void
    {
        $childCategories = CategoryInfo::from($category)->childCategories;
        if ($childCategories === []) {
            foreach (self::$categories as $case) {
                $this->assertNotContains($category, CategoryInfo::from($case)->parentCategories);
            }
        } else {
            foreach ($childCategories as $childCategory) {
                $parentCategoriesOfChildCategory = CategoryInfo::from($childCategory)->parentCategories;
                $this->assertNotSame([], $parentCategoriesOfChildCategory, "{$childCategory->name} should have the parent {$category->name}");
                $this->assertContains($category, $parentCategoriesOfChildCategory, "{$childCategory->name} should have the parent {$category->name}");
            }
        }
    }

    /**
     * @dataProvider provideCategories
     */
    public function testParentsFromChild(Category $category): void
    {
        $parentCategories = CategoryInfo::from($category)->parentCategories;
        if ($parentCategories === []) {
            foreach (self::$categories as $case) {
                $this->assertNotContains($category, CategoryInfo::from($case)->childCategories);
            }
        } else {
            foreach ($parentCategories as $parentCategory) {
                $childCategoriesOfParentCategory = CategoryInfo::from($parentCategory)->childCategories;
                $this->assertNotSame([], $childCategoriesOfParentCategory, "{$parentCategory->name} should have the child {$category->name}");
                $this->assertContains($category, $childCategoriesOfParentCategory, "{$parentCategory->name} should have the child {$category->name}");
            }
        }
    }
}
