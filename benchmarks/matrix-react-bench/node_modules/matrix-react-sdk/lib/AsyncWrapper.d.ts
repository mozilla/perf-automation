import React, { ComponentType } from "react";
import { IDialogProps } from "./components/views/dialogs/IDialogProps";
declare type AsyncImport<T> = {
    default: T;
};
interface IProps extends IDialogProps {
    prom: Promise<ComponentType | AsyncImport<ComponentType>>;
}
interface IState {
    component?: ComponentType;
    error?: Error;
}
/**
 * Wrap an asynchronous loader function with a react component which shows a
 * spinner until the real component loads.
 */
export default class AsyncWrapper extends React.Component<IProps, IState> {
    private unmounted;
    state: {
        component: any;
        error: any;
    };
    componentDidMount(): void;
    componentWillUnmount(): void;
    private onWrapperCancelClick;
    render(): JSX.Element;
}
export {};
