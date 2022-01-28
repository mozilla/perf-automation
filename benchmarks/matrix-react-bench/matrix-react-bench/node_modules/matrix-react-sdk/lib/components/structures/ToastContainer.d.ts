import * as React from "react";
import { IToast } from "../../stores/ToastStore";
interface IState {
    toasts: IToast<any>[];
    countSeen: number;
}
export default class ToastContainer extends React.Component<{}, IState> {
    constructor(props: any, context: any);
    componentWillUnmount(): void;
    private onToastStoreUpdate;
    render(): JSX.Element;
}
export {};
