<?php

declare(strict_types=1);

namespace MLUnipoints\Build\CodepointsBuilder\NameCollection;

enum OtherNameType: string
{
    /**
     * Old name as published in Unicode 1.0 or ISO 6429 names for control functions.
     */
    #[OtherNameTypeInfo(exportHandle: 'unicode1Name', plural: false)]
    case Unicode1Name = 'unicode1Name';

    /**
     * An alias that may serve as useful alternate choices for identifying characters in user interfaces.
     */
    #[OtherNameTypeInfo(exportHandle: 'informativeAliases', plural: true)]
    case InformativeAlias = 'informativeAlias';

    /**
     * A formal, unique, and stable alternate name for a character.
     */
    #[OtherNameTypeInfo(exportHandle: 'formalAliases', plural: true)]
    case FormalAlias = 'formalAlias';

    /**
     * Corrections for serious problems in the character names.
     */
    #[OtherNameTypeInfo(exportHandle: 'correctedNames', plural: true)]
    case Correction = 'correction';

    /**
     * ISO 6429 names for C0 and C1 control functions, and other commonly occurring names for control codes.
     */
    #[OtherNameTypeInfo(exportHandle: 'controlNames', plural: true)]
    case Control = 'control';

    /**
     * A few widely used alternate names for format characters.
     */
    #[OtherNameTypeInfo(exportHandle: 'alternateNames', plural: true)]
    case Alternate = 'alternate';

    /**
     * Several documented labels for C1 control code points which were never actually approved in any standard.
     */
    #[OtherNameTypeInfo(exportHandle: 'figments', plural: true)]
    case Figment = 'figment';

    /**
     * Commonly occurring abbreviations (or acronyms) for control codes, format characters, spaces, and variation selectors.
     */
    #[OtherNameTypeInfo(exportHandle: 'abbreviations', plural: true)]
    case Abbreviation = 'abbreviation';
}
