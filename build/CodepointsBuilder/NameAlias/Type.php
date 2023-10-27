<?php

declare(strict_types=1);

namespace MLUnipoints\Build\CodepointsBuilder\NameAlias;

/**
 * @see https://unicode.org/Public/UNIDATA/NameAliases.txt
 */
enum Type: string
{
    /**
     * Corrections for serious problems in the character names.
     */
    case Correction = 'correction';

    /**
     * ISO 6429 names for C0 and C1 control functions, and other commonly occurring names for control codes.
     */
    case Control = 'control';

    /**
     * A few widely used alternate names for format characters.
     */
    case Alternate = 'alternate';

    /**
     * Several documented labels for C1 control code points which were never actually approved in any standard.
     */
    case Figment = 'figment';

    /**
     * Commonly occurring abbreviations (or acronyms) for control codes, format characters, spaces, and variation selectors.
     */
    case Abbreviation = 'abbreviation';
}
