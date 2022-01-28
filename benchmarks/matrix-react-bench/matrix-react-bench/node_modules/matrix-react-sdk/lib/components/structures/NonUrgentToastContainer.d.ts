import * as React from "react";
import { ComponentClass } from "../../@types/common";
interface IProps {
}
interface IState {
    toasts: ComponentClass[];
}
export default class NonUrgentToastContainer extends React.PureComponent<IProps, IState> {
    constructor(props: any, context: any);
    componentWillUnmount(): void;
    private onUpdateToasts;
    render(): JSX.Element;
}
export {};
