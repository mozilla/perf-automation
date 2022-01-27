import React from 'react';
interface IProps {
    query: string;
    onChange(value: string): void;
    onEnter(): void;
}
declare class Search extends React.PureComponent<IProps> {
    private inputRef;
    componentDidMount(): void;
    private onKeyDown;
    render(): JSX.Element;
}
export default Search;
