<?php

/*
 * Please DO NOT edit this file manually!
 * It has been generated automatically by MLUnipoints\Build\CodepointsBuilder
 */

declare(strict_types=1);

namespace MLUnipoints\Codepoint;

use MLUnipoints\Category as Cat;
use MLUnipoints\Info\CodepointInfo as Info;
use MLUnipoints\Info\UnicodeInfo;

#[UnicodeInfo(unicodeVersion: '16.0.0')]
enum Supplementary_Private_Use_AreaA: string
{
    #[Info(id: 0xF0000, name: 'Plane 15 Private Use, First', category: Cat::Private_Use)]
    case Plane_15_Private_Use__First = "\u{F0000}";

    #[Info(id: 0xFFFFD, name: 'Plane 15 Private Use, Last', category: Cat::Private_Use)]
    case Plane_15_Private_Use__Last = "\u{FFFFD}";
}
