<?php

declare(strict_types=1);

namespace MLUnipoints\Test;

use MLUnipoints\Block;
use MLUnipoints\Info\BlockInfo;
use MLUnipoints\Info\PlaneInfo;
use MLUnipoints\Info\UnicodeInfo;
use PHPUnit\Framework\TestCase;
use ReflectionEnum;
use ReflectionEnumUnitCase;

final class BlockEnumTest extends TestCase
{
    public static function provideEnumCases(): array
    {
        $blockClass = new ReflectionEnum(Block::class);
        $previousCase = null;
        return array_map(
            static function (ReflectionEnumUnitCase $value) use (&$previousCase): array {
                $case = $value->getValue();
                $result = [$value->getValue(), $previousCase];
                $previousCase = $case;
                return $result;
            },
            $blockClass->getCases()
        );
    }

    public function testUnicodeInfoAttribute(): void
    {
        $info = UnicodeInfo::from(Block::class);
        $this->assertInstanceOf(UnicodeInfo::class, $info);
        $blockClass = new ReflectionEnum(Block::class);
        $enumAttributes = $blockClass->getAttributes(UnicodeInfo::class);
        $this->assertCount(1, $enumAttributes);
        $this->assertEquals($info, $enumAttributes[0]->newInstance());
        $this->assertMatchesRegularExpression('/^[1-9]\d*(\.\d+)*$/', $info->unicodeVersion);
    }

    public function testEnumType(): void
    {
        $blockClass = new ReflectionEnum(Block::class);
        $type = $blockClass->getBackingType();
        $this->assertNull($type);
    }

    public function testEnumeratedCases(): void
    {
        $casesList = self::provideEnumCases();
        $this->assertGreaterThan(0, count($casesList));
        foreach ($casesList as $index => [, $previousCase]) {
            if ($index === 0) {
                $this->assertNull($previousCase);
            } else {
                $this->assertInstanceOf(Block::class, $previousCase);
            }
        }
    }

    /**
     * @dataProvider provideEnumCases
     */
    public function testInfo(Block $case, ?Block $previousCase): void
    {
        $info = BlockInfo::from($case);
        $this->assertInstanceOf(BlockInfo::class, $info);
        $caseReflection = new ReflectionEnumUnitCase($case, $case->name);
        $caseAttributes = $caseReflection->getAttributes(BlockInfo::class);
        $this->assertCount(1, $caseAttributes);
        $this->assertEquals($info, $caseAttributes[0]->newInstance());
        $this->assertGreaterThanOrEqual(0, $info->fromCodepoint);
        $this->assertGreaterThanOrEqual($info->fromCodepoint, $info->toCodepoint);
        $planeInfo = PlaneInfo::from($info->plane);
        $this->assertGreaterThanOrEqual($planeInfo->fromCodepoint, $info->fromCodepoint);
        $this->assertLessThanOrEqual($planeInfo->toCodepoint, $info->fromCodepoint);
        $this->assertGreaterThanOrEqual($planeInfo->fromCodepoint, $info->toCodepoint);
        $this->assertLessThanOrEqual($planeInfo->toCodepoint, $info->toCodepoint);
        if ($previousCase !== null) {
            $previousInfo = BlockInfo::from($previousCase);
            $this->assertGreaterThan($previousInfo->toCodepoint, $info->fromCodepoint);
            $this->assertGreaterThanOrEqual($previousInfo->plane->value, $info->plane->value);
        }
    }
}
