import React from "react";
interface IProps {
    w?: number;
    h?: number;
    children?: React.ReactNode;
}
export default class InlineSpinner extends React.PureComponent<IProps> {
    static defaultProps: {
        w: number;
        h: number;
    };
    render(): JSX.Element;
}
export {};
