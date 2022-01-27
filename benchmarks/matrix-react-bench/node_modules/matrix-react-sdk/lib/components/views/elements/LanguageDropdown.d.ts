import React from 'react';
interface IProps {
    className?: string;
    onOptionChange: (language: string) => void;
    value?: string;
    disabled?: boolean;
}
interface IState {
    searchQuery: string;
    langs: string[];
}
export default class LanguageDropdown extends React.Component<IProps, IState> {
    constructor(props: IProps);
    componentDidMount(): void;
    private onSearchChange;
    render(): JSX.Element;
}
export {};
