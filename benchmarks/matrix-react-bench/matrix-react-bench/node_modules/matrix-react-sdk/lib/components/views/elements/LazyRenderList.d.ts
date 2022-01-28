import React from "react";
declare class ItemRange {
    topCount: number;
    renderCount: number;
    bottomCount: number;
    constructor(topCount: number, renderCount: number, bottomCount: number);
    contains(range: ItemRange): boolean;
    expand(amount: number): ItemRange;
    totalSize(): number;
}
interface IProps<T> {
    itemHeight: number;
    renderItem: (item: T) => JSX.Element;
    scrollTop: number;
    height: number;
    items?: T[];
    overflowMargin?: number;
    overflowItems?: number;
    element?: string;
    className?: string;
}
interface IState {
    renderRange: ItemRange;
}
export default class LazyRenderList<T = any> extends React.Component<IProps<T>, IState> {
    static defaultProps: Partial<IProps<unknown>>;
    constructor(props: IProps<T>);
    static getDerivedStateFromProps(props: IProps<unknown>, state: IState): Partial<IState>;
    private static getVisibleRangeFromProps;
    render(): JSX.Element;
}
export {};
