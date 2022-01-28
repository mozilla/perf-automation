import React from 'react';
interface ExistingSpellCheckLanguageIProps {
    language: string;
    onRemoved(language: string): any;
}
interface SpellCheckLanguagesIProps {
    languages: Array<string>;
    onLanguagesChange(languages: Array<string>): any;
}
interface SpellCheckLanguagesIState {
    newLanguage: string;
}
export declare class ExistingSpellCheckLanguage extends React.Component<ExistingSpellCheckLanguageIProps> {
    private onRemove;
    render(): JSX.Element;
}
export default class SpellCheckLanguages extends React.Component<SpellCheckLanguagesIProps, SpellCheckLanguagesIState> {
    constructor(props: any);
    private onRemoved;
    private onAddClick;
    private onNewLanguageChange;
    render(): JSX.Element;
}
export {};
