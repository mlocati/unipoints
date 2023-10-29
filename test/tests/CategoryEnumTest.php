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
    public static function provideEnumCases(): array
    {
        $categoryClass = new ReflectionEnum(Category::class);
        return array_map(
            static fn(ReflectionEnumBackedCase $value): array => [$value->getValue()],
            $categoryClass->getCases()
        );
    }

    public function testEnumType(): void
    {
        $categoryClass = new ReflectionEnum(Category::class);
        $type = $categoryClass->getBackingType();
        $this->assertNotNull($type);
        $this->assertTrue($type->isBuiltin());
        $this->assertSame('string', $type->getName());
    }

    public function testEnumeratedCases(): void
    {
        $casesList = self::provideEnumCases();
        $this->assertGreaterThan(0, count($casesList));
    }

    /**
     * @dataProvider provideEnumCases
     */
    public function testEnumNamesAndValues(Category $case): void
    {
        $this->assertMatchesRegularExpression('/^[A-Za-z]{1,2}$/', $case->value);
    }

    /**
     * @dataProvider provideEnumCases
     */
    public function testInfo(Category $case): void
    {
        $info = CategoryInfo::from($case);
        $this->assertInstanceOf(CategoryInfo::class, $info);
        $caseReflection = new ReflectionEnumBackedCase($case, $case->name);
        $caseAttributes = $caseReflection->getAttributes(CategoryInfo::class);
        $this->assertCount(1, $caseAttributes);
        $this->assertEquals($info, $caseAttributes[0]->newInstance());
        $this->assertNotSame('', $info->description);
    }

    /**
     * @dataProvider provideEnumCases
     */
    public function testChildrenFromParent(Category $category): void
    {
        $childCategories = CategoryInfo::from($category)->childCategories;
        if ($childCategories === []) {
            $allCategories = array_map(
                static fn(array $args): Category => $args[0],
                self::provideEnumCases()
            );
            foreach ($allCategories as $case) {
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
     * @dataProvider provideEnumCases
     */
    public function testParentsFromChild(Category $category): void
    {
        $parentCategories = CategoryInfo::from($category)->parentCategories;
        if ($parentCategories === []) {
            $allCategories = array_map(
                static fn(array $args): Category => $args[0],
                self::provideEnumCases()
            );
            foreach ($allCategories as $case) {
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
