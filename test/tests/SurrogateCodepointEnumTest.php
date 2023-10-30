<?php

declare(strict_types=1);

namespace MLUnipoints\Test;

use MLUnipoints\Category;
use MLUnipoints\Info\CategoryInfo;
use MLUnipoints\Info\CodepointInfo;
use MLUnipoints\Info\UnicodeInfo;
use MLUnipoints\SurrogateCodepoint;
use PHPUnit\Framework\TestCase;
use ReflectionEnum;
use ReflectionEnumBackedCase;
use ReflectionEnumUnitCase;

final class SurrogateCodepointEnumTest extends TestCase
{
    public static function provideEnumCases(): array
    {
        $class = new ReflectionEnum(SurrogateCodepoint::class);
        $previousCase = null;
        return array_map(
            static function (ReflectionEnumUnitCase $value) use (&$previousCase): array {
                $case = $value->getValue();
                $result = [$value->getValue(), $previousCase];
                $previousCase = $case;
                return $result;
            },
            $class->getCases()
        );
    }

    public function testEnumeratedCases(): void
    {
        $cases = self::provideEnumCases();
        $this->assertGreaterThan(0, count($cases));
        foreach ($cases as $index => [$case, $previousCase]) {
            $this->assertInstanceOf(SurrogateCodepoint::class, $case);
            if ($index === 0) {
                $this->assertNull($previousCase);
            } else {
                $this->assertInstanceOf(SurrogateCodepoint::class, $previousCase);
            }
        }
    }

    public function testEnumType(): void
    {
        $planeClass = new ReflectionEnum(SurrogateCodepoint::class);
        $type = $planeClass->getBackingType();
        $this->assertNotNull($type);
        $this->assertTrue($type->isBuiltin());
        $this->assertSame('int', $type->getName());
    }

    public function testUnicodeInfoAttribute(): void
    {
        $info = UnicodeInfo::from(SurrogateCodepoint::class);
        $this->assertInstanceOf(UnicodeInfo::class, $info);
        $class = new ReflectionEnum(SurrogateCodepoint::class);
        $enumAttributes = $class->getAttributes(UnicodeInfo::class);
        $this->assertCount(1, $enumAttributes);
        $this->assertEquals($info, $enumAttributes[0]->newInstance());
    }

    /**
     * @dataProvider provideEnumCases
     */
    private function testInfo(SurrogateCodepoint $case, ?SurrogateCodepoint $previousCase): void
    {
        $info = CodepointInfo::from($case);
        $this->assertInstanceOf(CodepointInfo::class, $info);
        $caseReflection = new ReflectionEnumBackedCase($case, $case->name);
        $caseAttributes = $caseReflection->getAttributes(CodepointInfo::class);
        $this->assertCount(1, $caseAttributes);
        $this->assertEquals($info, $caseAttributes[0]->newInstance());
        $this->assertGreaterThanOrEqual(0, $case->value);
        $this->assertNotSame('', $info->name);
        $this->assertSame($info->id, $case->value);
        $this->assertSame(Category::Surrogate, $info->category);
        $categoryInfo = CategoryInfo::from($info->category);
        $this->assertSame([], $categoryInfo->childCategories);
        if ($previousCase !== null) {
            $this->assertGreaterThanOrEqual($previousCase->value, $case->value);
            $previousInfo = CodepointInfo::from($previousCase);
            $this->assertGreaterThan($previousInfo->id, $info->id);
        }
    }
}
