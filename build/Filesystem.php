<?php

declare(strict_types=1);

namespace MLUnipoints\Build;

use RuntimeException;

class Filesystem
{
    public function delete(string $path): void
    {
        if (!is_dir($path) || is_link($path)) {
            if (!@unlink($path)) {
                throw new RuntimeException("Failed to delete file/link '{$path}'");
            }
            return;
        }
        foreach (scandir($path) as $item) {
            if ($item !== '.' && $item !== '..') {
                $this->delete("{$path}/{$item}");
            }
        }
        if (!@rmdir($path)) {
            throw new RuntimeException("Failed to delete directory '{$path}'");
        }
    }
}
