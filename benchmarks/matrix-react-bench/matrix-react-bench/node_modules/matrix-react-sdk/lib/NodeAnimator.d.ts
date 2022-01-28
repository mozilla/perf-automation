import React from "react";
interface IProps {
    children: React.ReactNode;
    transition?: object;
    startStyles: React.CSSProperties[];
}
/**
 * The NodeAnimator contains components and animates transitions.
 * It will only pick up direct changes to properties ('left', currently), and so
 * will not work for animating positional changes where the position is implicit
 * from DOM order. This makes it a lot simpler and lighter: if you need fully
 * automatic positional animation, look at react-shuffle or similar libraries.
 */
export default class NodeAnimator extends React.Component<IProps> {
    private nodes;
    private children;
    static defaultProps: Partial<IProps>;
    constructor(props: IProps);
    componentDidUpdate(): void;
    /**
     *
     * @param {HTMLElement} node element to apply styles to
     * @param {React.CSSProperties} styles a key/value pair of CSS properties
     * @returns {void}
     */
    private applyStyles;
    private updateChildren;
    private collectNode;
    render(): JSX.Element;
}
export {};
