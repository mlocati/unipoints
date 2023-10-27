<?php

declare(strict_types=1);

namespace MLUnipoints\Test;

use MLUnipoints\Build\BlocksBuilder;
use MLUnipoints\Test\Service\BlocksBuilderWrapper;
use PHPUnit\Framework\TestCase;
use ReflectionEnum;

final class BlocksBuilderTest extends TestCase
{
    /**
     * @group online
     */
    public function testGeneratingBlocks(): void
    {
        $builder = new BlocksBuilder('15.1.0');
        $blocks = $builder->getBlocks();
        $this->assertNotSame([], $blocks);
        $previousBlock = null;
        $codenames = [];
        foreach ($blocks as $block) {
            $this->assertInstanceOf(BlocksBuilder\Block::class, $block);
            $this->assertGreaterThanOrEqual($block->fromCodepoint, $block->toCodepoint);
            $this->assertMatchesRegularExpression('/^\S([^\r\n]*\S)?$/', $block->name);
            $this->assertMatchesRegularExpression('/^[A-Za-z][A-Za-z0-9_]*$/', $block->codename);
            $this->assertNotContains($block->codename, $codenames);
            if ($previousBlock !== null) {
                $this->assertGreaterThan($previousBlock->fromCodepoint, $block->fromCodepoint);
            }
            $previousBlock = $block;
            $codenames[] = $block->codename;
        }
    }

    /**
     * @group online
     */
    public function testSavingEnum(): void
    {
        $builder = new BlocksBuilderWrapper('15.1.0');
        $namespace = 'MLUnipoints\Test\Data' . str_replace('.', '_', (string) microtime(true));
        $code = $builder->createPHPCode($namespace, false);
        eval($code);
        $this->assertTrue(enum_exists("{$namespace}\Block", false));
        $expectedCases = [];
        foreach ($builder->getBlocks() as $block) {
            $expectedCases[] = $block->codename;
        }
        $reflection = new ReflectionEnum("{$namespace}\Block");
        $actualCases = [];
        foreach ($reflection->getCases() as $case) {
            $actualCases[] = $case->name;
        }
        $this->assertSame($expectedCases, $actualCases);
    }
}
