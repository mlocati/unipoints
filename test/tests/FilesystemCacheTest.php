<?php

declare(strict_types=1);

namespace MLUnipoints\Test;

use MLUnipoints\Build\FilesystemCache;
use PHPUnit\Framework\TestCase;

final class FilesystemCacheTest extends TestCase
{
    /**
     * @group online
     */
    public function testCreatingDirectory(): void
    {
        $name = 'test-' . microtime(true);
        $cache = new FilesystemCache(MLUNIPOINTS_TEST_PROJECTROOT . '/cache/' . $name);
        $this->assertDirectoryExists($cache->rootDirectory);
        $key = 'one';
        $keyDir = $cache->getDirectory($key);
        $this->assertDirectoryExists($keyDir);
        $this->assertTrue(mkdir("{$keyDir}/subdir"));
        $this->assertNotFalse(file_put_contents("{$keyDir}/subdir/subfile", 'test'));
        $this->assertTrue(link("{$keyDir}/subdir/subfile", "{$keyDir}/linked"));
        $cache->deleteDirectory($key);
        $this->assertDirectoryDoesNotExist($keyDir);
        $this->assertTrue(rmdir($cache->rootDirectory));
    }
}
