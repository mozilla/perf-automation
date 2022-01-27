import React, { PureComponent, RefCallback, RefObject } from "react";
import Field, { IInputProps } from "../elements/Field";
import { IFieldState, IValidationResult } from "../elements/Validation";
interface IProps extends Omit<IInputProps, "onValidate"> {
    id?: string;
    fieldRef?: RefCallback<Field> | RefObject<Field>;
    value: string;
    autoFocus?: boolean;
    label?: string;
    labelRequired?: string;
    labelInvalid?: string;
    validationRules?: (fieldState: IFieldState) => Promise<IValidationResult>;
    onChange(ev: React.FormEvent<HTMLElement>): void;
    onValidate?(result: IValidationResult): void;
}
declare class EmailField extends PureComponent<IProps> {
    static defaultProps: {
        label: string;
        labelRequired: string;
        labelInvalid: string;
    };
    readonly validate: ({ value, focused, allowEmpty }: IFieldState) => Promise<IValidationResult>;
    onValidate: (fieldState: IFieldState) => Promise<IValidationResult>;
    render(): JSX.Element;
}
export default EmailField;
