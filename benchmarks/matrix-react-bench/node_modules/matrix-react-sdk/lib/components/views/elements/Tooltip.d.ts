import React from 'react';
export declare enum Alignment {
    Natural = 0,
    Left = 1,
    Right = 2,
    Top = 3,
    Bottom = 4
}
interface IProps {
    className?: string;
    tooltipClassName?: string;
    visible?: boolean;
    label: React.ReactNode;
    alignment?: Alignment;
    yOffset?: number;
}
export default class Tooltip extends React.Component<IProps> {
    private tooltipContainer;
    private tooltip;
    private parent;
    static readonly Alignment: typeof Alignment;
    static readonly defaultProps: {
        visible: boolean;
        yOffset: number;
        alignment: Alignment;
    };
    componentDidMount(): void;
    componentDidUpdate(): void;
    componentWillUnmount(): void;
    private updatePosition;
    private renderTooltip;
    render(): JSX.Element;
}
export {};
