<?php

declare(strict_types=1);

namespace MLUnipoints;

use MLUnipoints\Info\CategoryInfo;

/**
 * @see https://www.unicode.org/reports/tr44/tr44-10.html#General_Category_Values
 */
enum Category: string
{
    #[CategoryInfo(description: 'an uppercase letter', parentCategories: [self::Cased_Letter, self::Letter])]
    case Uppercase_Letter = 'Lu';

    #[CategoryInfo(description: 'a lowercase letter', parentCategories: [self::Cased_Letter, self::Letter])]
    case Lowercase_Letter = 'Ll';

    #[CategoryInfo(description: 'a digraphic character, with first part uppercase', parentCategories: [self::Cased_Letter, self::Letter])]
    case Titlecase_Letter = 'Lt';

    #[CategoryInfo(description: 'a cased letter', childCategories: [self::Uppercase_Letter, self::Lowercase_Letter, self::Titlecase_Letter])]
    case Cased_Letter = 'LC';

    #[CategoryInfo(description: 'a modifier letter', parentCategories: [self::Letter])]
    case Modifier_Letter = 'Lm';

    #[CategoryInfo(description: 'other letters, including syllables and ideographs', parentCategories: [self::Letter])]
    case Other_Letter = 'Lo';

    #[CategoryInfo(description: 'a letter', childCategories: [self::Uppercase_Letter, self::Lowercase_Letter, self::Titlecase_Letter, self::Modifier_Letter, self::Other_Letter])]
    case Letter = 'L';

    #[CategoryInfo(description: 'a nonspacing combining mark (zero advance width)', parentCategories: [self::Mark])]
    case Nonspacing_Mark = 'Mn';

    #[CategoryInfo(description: 'a spacing combining mark (positive advance width)', parentCategories: [self::Mark])]
    case Spacing_Mark = 'Mc';

    #[CategoryInfo(description: 'an enclosing combining mark', parentCategories: [self::Mark])]
    case Enclosing_Mark = 'Me';

    #[CategoryInfo(description: 'a mark', childCategories: [self::Nonspacing_Mark, self::Spacing_Mark, self::Enclosing_Mark])]
    case Mark = 'M';

    #[CategoryInfo(description: 'a decimal digit', parentCategories: [self::Number])]
    case Decimal_Number = 'Nd';

    #[CategoryInfo(description: 'a letterlike numeric character', parentCategories: [self::Number])]
    case Letter_Number = 'Nl';

    #[CategoryInfo(description: 'a numeric character of other type', parentCategories: [self::Number])]
    case Other_Number = 'No';

    #[CategoryInfo(description: 'a number', childCategories: [self::Decimal_Number, self::Letter_Number, self::Other_Number])]
    case Number = 'N';

    #[CategoryInfo(description: 'a connecting punctuation mark, like a tie', parentCategories: [self::Punctuation])]
    case Connector_Punctuation = 'Pc';

    #[CategoryInfo(description: 'a dash or hyphen punctuation mark', parentCategories: [self::Punctuation])]
    case Dash_Punctuation = 'Pd';

    #[CategoryInfo(description: 'an opening punctuation mark (of a pair)', parentCategories: [self::Punctuation])]
    case Open_Punctuation = 'Ps';

    #[CategoryInfo(description: 'a closing punctuation mark (of a pair)', parentCategories: [self::Punctuation])]
    case Close_Punctuation = 'Pe';

    #[CategoryInfo(description: 'an initial quotation mark', parentCategories: [self::Punctuation])]
    case Initial_Punctuation = 'Pi';

    #[CategoryInfo(description: 'a final quotation mark', parentCategories: [self::Punctuation])]
    case Final_Punctuation = 'Pf';

    #[CategoryInfo(description: 'a punctuation mark of other type', parentCategories: [self::Punctuation])]
    case Other_Punctuation = 'Po';

    #[CategoryInfo(description: 'a punctuation', childCategories: [self::Connector_Punctuation, self::Dash_Punctuation, self::Open_Punctuation, self::Close_Punctuation, self::Initial_Punctuation, self::Final_Punctuation, self::Other_Punctuation])]
    case Punctuation = 'P';

    #[CategoryInfo(description: 'a symbol of mathematical use', parentCategories: [self::Symbol])]
    case Math_Symbol = 'Sm';

    #[CategoryInfo(description: 'a currency sign', parentCategories: [self::Symbol])]
    case Currency_Symbol = 'Sc';

    #[CategoryInfo(description: 'a non-letterlike modifier symbol', parentCategories: [self::Symbol])]
    case Modifier_Symbol = 'Sk';

    #[CategoryInfo(description: 'a symbol of other type', parentCategories: [self::Symbol])]
    case Other_Symbol = 'So';

    #[CategoryInfo(description: 'a symbol', childCategories: [self::Math_Symbol, self::Currency_Symbol, self::Modifier_Symbol, self::Other_Symbol])]
    case Symbol = 'S';

    #[CategoryInfo(description: 'a space character (of various non-zero widths)', parentCategories: [self::Separator])]
    case Space_Separator = 'Zs';

    #[CategoryInfo(description: 'U+2028 LINE SEPARATOR only', parentCategories: [self::Separator])]
    case Line_Separator = 'Zl';

    #[CategoryInfo(description: 'U+2029 PARAGRAPH SEPARATOR only', parentCategories: [self::Separator])]
    case Paragraph_Separator = 'Zp';

    #[CategoryInfo(description: 'a separator', childCategories: [self::Space_Separator, self::Line_Separator, self::Paragraph_Separator])]
    case Separator = 'Z';

    #[CategoryInfo(description: 'a C0 or C1 control code', parentCategories: [self::Other])]
    case Control = 'Cc';

    #[CategoryInfo(description: 'a format control character', parentCategories: [self::Other])]
    case Format = 'Cf';

    #[CategoryInfo(description: 'a surrogate code point', parentCategories: [self::Other])]
    case Surrogate = 'Cs';

    #[CategoryInfo(description: 'a private-use character', parentCategories: [self::Other])]
    case Private_Use = 'Co';

    #[CategoryInfo(description: 'a reserved unassigned code point or a noncharacter', parentCategories: [self::Other])]
    case Unassigned = 'Cn';

    #[CategoryInfo(description: 'a control/surrogate/private-use/reserved/unassigned/noncharacter codepoint', childCategories: [self::Control, self::Format, self::Surrogate, self::Private_Use, self::Unassigned])]
    case Other = 'C';
}
