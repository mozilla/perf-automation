import React from 'react';
interface IProps {
    element: React.ReactNode;
    onResize?: () => void;
}
/**
 * This component can be used to display generic HTML content in a contextual
 * menu.
 */
export default class GenericElementContextMenu extends React.Component<IProps> {
    constructor(props: IProps);
    componentDidMount(): void;
    componentWillUnmount(): void;
    private resize;
    render(): JSX.Element;
}
export {};
