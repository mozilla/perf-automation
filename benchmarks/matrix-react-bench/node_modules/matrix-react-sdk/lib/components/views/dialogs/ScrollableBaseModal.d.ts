import React from "react";
import { MatrixClient } from "matrix-js-sdk/src/client";
import { IDialogProps } from "./IDialogProps";
export interface IScrollableBaseState {
    canSubmit: boolean;
    title: string;
    actionLabel: string;
}
/**
 * Scrollable dialog base from Compound (Web Components).
 */
export default abstract class ScrollableBaseModal<TProps extends IDialogProps, TState extends IScrollableBaseState> extends React.PureComponent<TProps, TState> {
    protected constructor(props: TProps);
    protected get matrixClient(): MatrixClient;
    private onKeyDown;
    private onCancel;
    private onSubmit;
    protected abstract cancel(): void;
    protected abstract submit(): void;
    protected abstract renderContent(): React.ReactNode;
    render(): JSX.Element;
}
