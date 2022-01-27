import React from 'react';
import { IFieldState, IValidationResult } from "../elements/Validation";
import { IDialogProps } from "./IDialogProps";
interface IProps extends IDialogProps {
    title?: string;
    description?: React.ReactNode;
    value?: string;
    placeholder?: string;
    button?: string;
    busyMessage?: string;
    focus?: boolean;
    hasCancel?: boolean;
    validator?: (fieldState: IFieldState) => IValidationResult;
    fixedWidth?: boolean;
}
interface IState {
    value: string;
    busy: boolean;
    valid: boolean;
}
export default class TextInputDialog extends React.Component<IProps, IState> {
    private field;
    static defaultProps: {
        title: string;
        value: string;
        description: string;
        busyMessage: string;
        focus: boolean;
        hasCancel: boolean;
    };
    constructor(props: IProps);
    componentDidMount(): void;
    private onOk;
    private onCancel;
    private onChange;
    private onValidate;
    render(): JSX.Element;
}
export {};
