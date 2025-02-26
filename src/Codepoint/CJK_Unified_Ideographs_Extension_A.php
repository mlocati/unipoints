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
enum CJK_Unified_Ideographs_Extension_A: string
{
    #[Info(id: 0x3400, name: 'CJK Ideograph Extension A, First', category: Cat::Other_Letter)]
    case CJK_Ideograph_Extension_A__First = "\u{3400}";

    #[Info(id: 0x4DBF, name: 'CJK Ideograph Extension A, Last', category: Cat::Other_Letter)]
    case CJK_Ideograph_Extension_A__Last = "\u{4DBF}";
}
