<?php

declare(strict_types=1);

use PhpCsFixer\Console\Application;

$minVersion = '3.36.0';
$currentVersion = class_exists(Application::class) && defined(Application::class . '::VERSION') ? Application::VERSION : '';
if ($currentVersion === '' || version_compare(Application::VERSION, $minVersion) < 0) {
    throw new RuntimeException($currentVersion === '' ? "Minimum PHP-CS-Fixer version is {$minVersion}" : "Minimum PHP-CS-Fixer version is {$minVersion} (you are using {$currentVersion})");
}

/*
 * This document has been generated with
 * https://mlocati.github.io/php-cs-fixer-configurator/#version:3.35.1|configurator
 * you can change this configuration by importing this file.
 */
$config = new PhpCsFixer\Config();
return $config
    ->setRiskyAllowed(true)
    ->setRules([
        '@PER-CS' => true,
        // PHP arrays should be declared using the configured syntax.
        'array_syntax' => ['syntax' => 'short'],
        // Force strict types declaration in all files. Requires PHP >= 7.0.
        'declare_strict_types' => true,
        // Unused `use` statements must be removed.
        'no_unused_imports' => true,
        // Ordering `use` statements.
        'ordered_imports' => ['sort_algorithm' => 'alpha'],
    ])
    ->setFinder(
        PhpCsFixer\Finder::create()
        // ->exclude('folder-to-exclude') // if you want to exclude some folders, you can do it like this!
        ->in([
            __DIR__ . '/build',
            __DIR__ . '/src',
            __DIR__ . '/test',
        ])
        ->append([
            __DIR__ . '/bin/unipoints',
            __FILE__,
        ])
    )
;
