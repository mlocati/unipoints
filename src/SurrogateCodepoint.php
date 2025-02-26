<?php

/*
 * Please DO NOT edit this file manually!
 * It has been generated automatically by MLUnipoints\Build\CodepointsBuilder
 */

declare(strict_types=1);

namespace MLUnipoints;

use MLUnipoints\Category as Cat;
use MLUnipoints\Info\CodepointInfo as Info;
use MLUnipoints\Info\UnicodeInfo;

#[UnicodeInfo(unicodeVersion: '16.0.0')]
enum SurrogateCodepoint: int
{
    // Plane: 0 (Basic Multilingual Plane}

    // Block: High Surrogates

    #[Info(id: 0xD800, name: 'Non Private Use High Surrogate, First', block: Block::High_Surrogates, category: Cat::Surrogate)]
    case Non_Private_Use_High_Surrogate__First = 0xD800;

    #[Info(id: 0xDB7F, name: 'Non Private Use High Surrogate, Last', block: Block::High_Surrogates, category: Cat::Surrogate)]
    case Non_Private_Use_High_Surrogate__Last = 0xDB7F;

    // Block: High Private Use Surrogates

    #[Info(id: 0xDB80, name: 'Private Use High Surrogate, First', block: Block::High_Private_Use_Surrogates, category: Cat::Surrogate)]
    case Private_Use_High_Surrogate__First = 0xDB80;

    #[Info(id: 0xDBFF, name: 'Private Use High Surrogate, Last', block: Block::High_Private_Use_Surrogates, category: Cat::Surrogate)]
    case Private_Use_High_Surrogate__Last = 0xDBFF;

    // Block: Low Surrogates

    #[Info(id: 0xDC00, name: 'Low Surrogate, First', block: Block::Low_Surrogates, category: Cat::Surrogate)]
    case Low_Surrogate__First = 0xDC00;

    #[Info(id: 0xDFFF, name: 'Low Surrogate, Last', block: Block::Low_Surrogates, category: Cat::Surrogate)]
    case Low_Surrogate__Last = 0xDFFF;
}
