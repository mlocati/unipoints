import type { Codepoint } from "./Data"

interface ICodepointStrings {
  [index: number]: string[]
}

const codepointStrings: ICodepointStrings = {}

function buildCodepointUppercaseStrings(codepoint: Codepoint): string[]
{
    const result: string[] = [codepoint.name.toUpperCase()];
    if (codepoint.unicode1Name !== undefined) {
        result.push(codepoint.unicode1Name.toUpperCase());
    }
    codepoint.formalAliases?.forEach((s) => result.push(s.toUpperCase()));
    codepoint.informativeAliases?.forEach((s) => result.push(s.toUpperCase()));
    codepoint.correctedNames?.forEach((s) => result.push(s.toUpperCase()));
    codepoint.controlNames?.forEach((s) => result.push(s.toUpperCase()));
    codepoint.alternateNames?.forEach((s) => result.push(s.toUpperCase()));
    codepoint.figments?.forEach((s) => result.push(s.toUpperCase()));
    codepoint.abbreviations?.forEach((s) => result.push(s.toUpperCase()));

    return result;
}

function getCodepointUppercaseStrings(codepoint: Codepoint): string[]
{
    return codepointStrings[codepoint.id] ?? (codepointStrings[codepoint.id] = buildCodepointUppercaseStrings(codepoint));
}

export default function match(codepoint: Codepoint, regexOrUppercaseWords: RegExp|string[]): boolean
{
    const strings = getCodepointUppercaseStrings(codepoint);
    if (regexOrUppercaseWords instanceof RegExp) {
        return strings.some((string) => regexOrUppercaseWords.test(string));
    }
    return strings.some((string) => regexOrUppercaseWords.every((word) => string.includes(word)));
} 
