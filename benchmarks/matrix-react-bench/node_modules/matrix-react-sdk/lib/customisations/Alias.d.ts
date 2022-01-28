declare function getDisplayAliasForAliasSet(canonicalAlias: string, altAliases: string[]): string;
export interface IAliasCustomisations {
    getDisplayAliasForAliasSet?: typeof getDisplayAliasForAliasSet;
}
declare const _default: IAliasCustomisations;
export default _default;
