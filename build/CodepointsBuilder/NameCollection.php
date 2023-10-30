<?php

declare(strict_types=1);

namespace MLUnipoints\Build\CodepointsBuilder;

use MLUnipoints\Build\CodepointsBuilder\NameCollection\OtherNameType;
use RuntimeException;

class NameCollection
{
    public readonly string $name;
    public readonly array $otherNames;

    /**
     * @throws \RuntimeException
     */
    public function __construct(
        UnicodeData $unicodeData,
        ?Name $name,
        ?NameAlias $nameAlias,
    ) {
        $this->name = $this->extractName($unicodeData, $name, $nameAlias);
        $this->otherNames = $this->extractOtherNames($unicodeData, $name, $nameAlias);
    }

    /**
     * @throws \RuntimeException
     */
    private function extractName(
        UnicodeData $unicodeData,
        ?Name $name,
        ?NameAlias $nameAlias,
    ): string {
        if ($name === null) {
            if ($nameAlias === null && $unicodeData->nameIsPseudo && $unicodeData->unicode1Name === '') {
                return $unicodeData->name;
            }
            throw new RuntimeException("Missing codepoint in NamesList");
        }
        if ($name->nameIsPseudo) {
            if (($controlNames = $nameAlias?->getAliases(NameAlias\Type::Control) ?? []) !== []) {
                return $controlNames[0];
            }
            if (($figmentNames = $nameAlias?->getAliases(NameAlias\Type::Figment) ?? []) !== []) {
                return $figmentNames[0];
            }
            throw new RuntimeException("Unable to determine the name of the codepoint");
        }
        return $unicodeData->name;
    }

    /**
     * @throws \RuntimeException
     */
    private function extractOtherNames(
        UnicodeData $unicodeData,
        ?Name $name,
        ?NameAlias $nameAlias,
    ): array {
        $result = [];
        $doneNames = [mb_strtolower($this->name)];
        $this->extractOtherName(OtherNameType::Unicode1Name, $unicodeData->unicode1Name, $doneNames, $result);
        if ($nameAlias !== null) {
            foreach ($nameAlias->getTypes() as $aliasType) {
                $nameType = OtherNameType::from($aliasType->value);
                foreach ($nameAlias->getAliases($aliasType) as $alias) {
                    $this->extractOtherName($nameType, $alias, $doneNames, $result);
                }
            }
        }
        if ($name !== null) {
            foreach ($name->aliases as $alias) {
                $this->extractOtherName(OtherNameType::InformativeAlias, $alias, $doneNames, $result);
            }
            foreach ($name->formalAliases as $formalAlias) {
                $this->extractOtherName(OtherNameType::FormalAlias, $formalAlias, $doneNames, $result);
            }
        }

        return $result;
    }

    private function extractOtherName(OtherNameType $type, string $name, array &$doneNames, array &$result): void
    {

        if ($name === '' || in_array($doneName = mb_strtolower($name), $doneNames, true)) {
            return;
        }
        if (isset($result[$type->value])) {
            $result[$type->value][] = $name;
        } else {
            $result[$type->value] = [$name];
        }
        $doneNames[] = $doneName;
        return;
    }
}
