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
    private static ReflectionEnum $planeClass;

    /**
     * {@inheritdoc}
     *
     * @see \PHPUnit\Framework\TestCase::setUpBeforeClass()
     */
    public static function setUpBeforeClass(): void
    {
        self::$planeClass = new ReflectionEnum(Plane::class);
    }

    public function testEnumType(): void
    {
        $type = self::$planeClass->getBackingType();
        $this->assertNotNull($type);
        $this->assertTrue($type->isBuiltin());
        $this->assertSame('int', $type->getName());
    }

    public function testEnumNamesAndValues(): void
    {
        $previousCase = null;
        foreach (self::$planeClass->getCases() as $case) {
            $this->assertInstanceOf(ReflectionEnumBackedCase::class, $case);
            $this->assertIsInt($case->getBackingValue());
            $this->assertMatchesRegularExpression('/[^0-9]' . $case->getBackingValue() . '$/', $case->getName());
            if ($previousCase !== null) {
                $this->assertSame($previousCase->getBackingValue() + 1, $case->getBackingValue());
            }
            $previousCase = $case;
        }
        $this->assertNotNull($previousCase);
    }

    public function testInfo(): void
    {
        $previousInfo = null;
        $previousNames = [];
        $previousShortNames = [];
        foreach (self::$planeClass->getCases() as $case) {
            $infoAttributes = $case->getAttributes(PlaneInfo::class);
            $this->assertCount(1, $infoAttributes);
            $info = $infoAttributes[0]->newInstance();
            $this->assertInstanceOf(PlaneInfo::class, $info);
            $this->assertEquals($info, PlaneInfo::from($case->getValue()));
            /** @var PlaneInfo $info */
            $this->assertGreaterThanOrEqual(0, $info->fromCodepoint);
            $this->assertGreaterThanOrEqual($info->fromCodepoint, $info->toCodepoint);
            if ($previousInfo !== null) {
                $this->assertSame($previousInfo->toCodepoint + 1, $info->fromCodepoint);
            }
            if ($info->unassigned) {
                $this->assertSame('', $info->name);
                $this->assertSame('', $info->shortName);
            } else {
                $this->assertNotSame('', $info->name);
                $this->assertNotSame('', $info->shortName);
                $this->assertNotContains($info->name, $previousNames);
                $this->assertNotContains($info->shortName, $previousShortNames);
                $previousNames[] = $info->name;
                $previousShortNames[] = $info->shortName;
            }
            $previousInfo = $info;
        }
        $this->assertNotNull($previousInfo);
        $this->assertNotSame([], $previousNames);
    }
}
