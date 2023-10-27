<?php

declare(strict_types=1);

namespace MLUnipoints\Test;

use MLUnipoints\Build\DataStorage;
use PHPUnit\Framework\TestCase;

final class DataStorageTest extends TestCase
{
    /**
     * @group online
     */
    public function testGetLatestVersion(): void
    {
        $dataStorage = new DataStorage();
        $latestVersion = $dataStorage->getLatestVersion();
        $this->assertMatchesRegularExpression('/^[1-9]\d*(\.\d+)+/', $latestVersion);
        $this->assertGreaterThanOrEqual(0, version_compare($latestVersion, '15.1.0'));
    }
}
