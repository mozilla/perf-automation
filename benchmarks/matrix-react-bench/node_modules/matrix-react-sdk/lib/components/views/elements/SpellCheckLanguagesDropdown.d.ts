import React from 'react';
interface SpellCheckLanguagesDropdownIProps {
    className: string;
    value: string;
    onOptionChange(language: string): any;
}
interface SpellCheckLanguagesDropdownIState {
    searchQuery: string;
    languages: any;
}
export default class SpellCheckLanguagesDropdown extends React.Component<SpellCheckLanguagesDropdownIProps, SpellCheckLanguagesDropdownIState> {
    constructor(props: any);
    componentDidMount(): void;
    private onSearchChange;
    render(): JSX.Element;
}
export {};
