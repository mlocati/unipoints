<?php

declare(strict_types=1);

namespace MLUnipoints;

use MLUnipoints\Info\PlaneInfo;

enum Plane: int
{
    #[PlaneInfo(fromCodepoint: 0x0, toCodepoint: 0xFFFF, name: 'Basic Multilingual Plane', shortName: 'BMP')]
    case Plane0 = 0;

    #[PlaneInfo(fromCodepoint: 0x10000, toCodepoint: 0x1FFFF, name: 'Supplementary Multilingual Plane', shortName: 'SMP')]
    case Plane1 = 1;

    #[PlaneInfo(fromCodepoint: 0x20000, toCodepoint: 0x2FFFF, name: 'Supplementary Ideographic Plane', shortName: 'SIP')]
    case Plane2 = 2;

    #[PlaneInfo(fromCodepoint: 0x30000, toCodepoint: 0x3FFFF, name: 'Tertiary Ideographic Plane', shortName: 'TIP')]
    case Plane3 = 3;

    #[PlaneInfo(fromCodepoint: 0x40000, toCodepoint: 0x4FFFF, unassigned: true)]
    case Plane4 = 4;

    #[PlaneInfo(fromCodepoint: 0x50000, toCodepoint: 0x5FFFF, unassigned: true)]
    case Plane5 = 5;

    #[PlaneInfo(fromCodepoint: 0x60000, toCodepoint: 0x6FFFF, unassigned: true)]
    case Plane6 = 6;

    #[PlaneInfo(fromCodepoint: 0x70000, toCodepoint: 0x7FFFF, unassigned: true)]
    case Plane7 = 7;

    #[PlaneInfo(fromCodepoint: 0x80000, toCodepoint: 0x8FFFF, unassigned: true)]
    case Plane8 = 8;

    #[PlaneInfo(fromCodepoint: 0x90000, toCodepoint: 0x9FFFF, unassigned: true)]
    case Plane9 = 9;

    #[PlaneInfo(fromCodepoint: 0xA0000, toCodepoint: 0xAFFFF, unassigned: true)]
    case Plane10 = 10;

    #[PlaneInfo(fromCodepoint: 0xB0000, toCodepoint: 0xBFFFF, unassigned: true)]
    case Plane11 = 11;

    #[PlaneInfo(fromCodepoint: 0xC0000, toCodepoint: 0xCFFFF, unassigned: true)]
    case Plane12 = 12;

    #[PlaneInfo(fromCodepoint: 0xD0000, toCodepoint: 0xDFFFF, unassigned: true)]
    case Plane13 = 13;

    #[PlaneInfo(fromCodepoint: 0xE0000, toCodepoint: 0xEFFFF, name: 'Supplementary Special-purpose Plane', shortName: 'SSP')]
    case Plane14 = 14;

    #[PlaneInfo(fromCodepoint: 0xF0000, toCodepoint: 0xFFFFF, name: 'Supplementary Private Use Area-A', shortName: 'SPUA-A')]
    case Plane15 = 15;

    #[PlaneInfo(fromCodepoint: 0x100000, toCodepoint: 0x10FFFF, name: 'Supplementary Private Use Area-B', shortName: 'SPUA-B')]
    case Plane16 = 16;
}
