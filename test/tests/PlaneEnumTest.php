<?php

declare(strict_types=1);

namespace MLUnipoints\Test;

use MLUnipoints\Info\PlaneInfo;
use MLUnipoints\Plane;
use PHPUnit\Framework\TestCase;
use ReflectionEnum;
use ReflectionEnumBackedCase;

final class PlaneEnumTest extends TestCase
{
    public static function provideEnumCases(): array
    {
        $planeClass = new ReflectionEnum(Plane::class);
        $previousCase = null;
        return array_map(
            static function (ReflectionEnumBackedCase $value) use (&$previousCase): array {
                $case = $value->getValue();
                $result = [$value->getValue(), $previousCase];
                $previousCase = $case;
                return $result;
            },
            $planeClass->getCases()
        );
    }

    public function testEnumType(): void
    {
        $planeClass = new ReflectionEnum(Plane::class);
        $type = $planeClass->getBackingType();
        $this->assertNotNull($type);
        $this->assertTrue($type->isBuiltin());
        $this->assertSame('int', $type->getName());
    }

    public function testEnumeratedCases(): void
    {
        $casesList = self::provideEnumCases();
        $this->assertGreaterThan(0, count($casesList));
        foreach ($casesList as $index => [, $previousCase]) {
            if ($index === 0) {
                $this->assertNull($previousCase);
            } else {
                $this->assertInstanceOf(Plane::class, $previousCase);
            }
        }
    }

    /**
     * @dataProvider provideEnumCases
     */
    public function testEnumNamesAndValues(Plane $case, ?Plane $previousCase): void
    {
        $this->assertMatchesRegularExpression('/[^0-9]' . $case->value . '$/', $case->name);
        if ($previousCase !== null) {
            $this->assertSame($previousCase->value + 1, $case->value);
        }
    }

    /**
     * @dataProvider provideEnumCases
     */
    public function testInfo(Plane $case, ?Plane $previousCase): void
    {
        $info = PlaneInfo::from($case);
        $this->assertInstanceOf(PlaneInfo::class, $info);
        $caseReflection = new ReflectionEnumBackedCase($case, $case->name);
        $caseAttributes = $caseReflection->getAttributes(PlaneInfo::class);
        $this->assertCount(1, $caseAttributes);
        $this->assertEquals($info, $caseAttributes[0]->newInstance());
        $this->assertGreaterThanOrEqual(0, $info->fromCodepoint);
        $this->assertGreaterThanOrEqual($info->fromCodepoint, $info->toCodepoint);
        if ($info->unassigned) {
            $this->assertSame('', $info->name);
            $this->assertSame('', $info->shortName);
        } else {
            $this->assertNotSame('', $info->name);
            $this->assertNotSame('', $info->shortName);
        }
        if ($previousCase !== null) {
            $previousInfo = PlaneInfo::from($previousCase);
            $this->assertSame($previousInfo->toCodepoint + 1, $info->fromCodepoint);
        }
    }

    public function testNonDuplicatedNames(): void
    {
        $allNames = [];
        $allShortNames = [];
        foreach (self::provideEnumCases() as [$case]) {
            $info = PlaneInfo::from($case);
            if ($info->unassigned) {
                continue;
            }
            $this->assertNotContains($info->name, $allNames);
            $this->assertNotContains($info->shortName, $allShortNames);
            $allNames[] = $info->name;
            $allShortNames[] = $info->shortName;
        }
        $this->assertNotSame([], $allNames);
        $this->assertNotSame([], $allShortNames);
    }
}
