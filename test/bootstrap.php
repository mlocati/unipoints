<?php

declare(strict_types=1);

use MLUnipoints\Build\FilesystemCache;

require_once __DIR__ . '/../vendor/autoload.php';

define('MLUNIPOINTS_TEST_PROJECTROOT', rtrim(str_replace(DIRECTORY_SEPARATOR, '/', realpath(__DIR__ . '/..')), '/'));

FilesystemCache::setInstance(new FilesystemCache(MLUNIPOINTS_TEST_PROJECTROOT . '/cache/test'));
