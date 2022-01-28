import React, { PureComponent, RefCallback, RefObject } from "react";
import Field, { IInputProps } from "../elements/Field";
import { IValidationResult } from "../elements/Validation";
interface IProps extends Omit<IInputProps, "onValidate"> {
    id?: string;
    fieldRef?: RefCallback<Field> | RefObject<Field>;
    autoComplete?: string;
    value: string;
    password: string;
    labelRequired?: string;
    labelInvalid?: string;
    onChange(ev: React.FormEvent<HTMLElement>): any;
    onValidate?(result: IValidationResult): any;
}
declare class PassphraseConfirmField extends PureComponent<IProps> {
    static defaultProps: {
        label: string;
        labelRequired: string;
        labelInvalid: string;
    };
    private validate;
    private onValidate;
    render(): JSX.Element;
}
export default PassphraseConfirmField;
