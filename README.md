[![Tests](https://github.com/mlocati/unipoints/actions/workflows/tests.yml/badge.svg)](https://github.com/mlocati/unipoints/actions/workflows/tests.yml)
# A Unicode Codepoint library for PHP

## Simplified Unicode Terminology

### Codepoints

<dfn>Codepoints</dfn> are characters, spaces, symbols, punctuations, separators, ... that is, the single units that compose texts.


### Blocks

Codepoints are grouped in <dfn>blocks<dfn>, that is, groups of contiguous codepoints that are part of a common set.

Examples:

- a is contained in the `Basic Latin` block
- &alpha; is contained in the `Greek and Coptic` block
- &#x1D160; is contained in the `Musical Symbols` block
- &#x21A9; is contained in the `Arrows` block
- &#x2602; is contained in the `Miscellaneous Symbols` block


### Planes

Planes are blocks of 65,536 continguous codepoints and contains may contain zero, one or many blocks.

### General Category

This library also provides the <dfn>general category<dfn> of every codepoint, that is, you can know if a codepoint is a lowercase letter, a symbol, a punctuation, and so on.

## Sample Usage

Codepoints are listed in the string-backed [`MLUnipoints\Codepoint`](https://github.com/mlocati/unipoints/blob/main/src/Codepoint.php) enum.
The value of the enum cases strings contain the unicode symbol: that way, for example in order to get the case of `a`, you simply can simply write:

```php
use MLUnipoints\Codepoint;

$codepoint = Codepoint::from('a');
```

Since the `MLUnipoints\Codepoint` enum is rather big (it can use tens of MB of memory when you autoload it), you can also use the block-specific instances defined under the `MLUnipoints\Codepoint` namespace (but that requires that you already know the block in advance).
For example:

```php
use MLUnipoints\Codepoint;

$codepoint = Codepoint\Basic_Latin::from('a');
```

Every case of the `MLUnipoints\Codepoint` enum has a [`MLUnipoints\Info\CodepointInfo`](https://github.com/mlocati/unipoints/blob/main/src/Info/CategoryInfo.php) attribute.
You can easily retrieve this attribute by writing


```php
use MLUnipoints\Codepoint;
use MLUnipoints\Info\CodepointInfo;

$codepoint = Codepoint::from('a');
$codepointInfo = CodepointInfo::from(Codepoint::from('a'));
```

This attribute provides the numeric value of the codepoint, the Unicode name, the general category, and (if you don't use the block-specific enums) the block.

You can also similarly the details of the block, plane and the general category.

For example, this code:

```php
use MLUnipoints\Codepoint;
use MLUnipoints\Info\BlockInfo;
use MLUnipoints\Info\CategoryInfo;
use MLUnipoints\Info\CodepointInfo;
use MLUnipoints\Info\PlaneInfo;

$codepoint = Codepoint::from('a');
$codepointInfo = CodepointInfo::from($codepoint);
$categoryInfo = CategoryInfo::from($codepointInfo->category);
$blockInfo = BlockInfo::from($codepointInfo->block);
$planeInfo = PlaneInfo::from($blockInfo->plane);

echo 'Codepoint: ', $codepointInfo->id, "\n";

echo 'Codepoint name: ', $codepointInfo->name, "\n";

echo 'Codepoint general category: ', $categoryInfo->description, "\n";

foreach ($categoryInfo->parentCategories as $parentCategory) {
    echo 'Codepoint parent general category: ', CategoryInfo::from($parentCategory)->description, "\n";
}

echo 'Block name: ', $blockInfo->name, "\n";

echo 'Plane name: ', $planeInfo->name, "\n";

echo 'Plane short name: ', $planeInfo->shortName, "\n";

```

will output:

```
Codepoint: 97
Codepoint name: LATIN SMALL LETTER A
Codepoint general category: a lowercase letter
Codepoint parent general category: a cased letter
Codepoint parent general category: a letter
Block name: Basic Latin
Plane name: Basic Multilingual Plane
Plane short name: BMP
```

You can also use the Unicode enums to print out characters and symbols.

For example:

```php
use MLUnipoints\Codepoint;

echo Codepoint::SUN_BEHIND_CLOUD->value;

```

will print

> &#x26C5;

## Do you really want to say thank you?

You can offer me a [monthly coffee](https://github.com/sponsors/mlocati) or a [one-time coffee](https://paypal.me/mlocati) :wink:
