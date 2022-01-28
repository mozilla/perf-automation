import React from "react";
interface IProps {
    w?: number;
    h?: number;
    message?: string;
}
export default class Spinner extends React.PureComponent<IProps> {
    static defaultProps: Partial<IProps>;
    render(): JSX.Element;
}
export {};
