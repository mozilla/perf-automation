import React, { PureComponent, RefCallback, RefObject } from "react";
import { IFieldState, IValidationResult } from "../elements/Validation";
import Field, { IInputProps } from "../elements/Field";
interface IProps extends Omit<IInputProps, "onValidate"> {
    autoFocus?: boolean;
    id?: string;
    className?: string;
    minScore: 0 | 1 | 2 | 3 | 4;
    value: string;
    fieldRef?: RefCallback<Field> | RefObject<Field>;
    label?: string;
    labelEnterPassword?: string;
    labelStrongPassword?: string;
    labelAllowedButUnsafe?: string;
    onChange(ev: React.FormEvent<HTMLElement>): any;
    onValidate?(result: IValidationResult): any;
}
declare class PassphraseField extends PureComponent<IProps> {
    static defaultProps: {
        label: string;
        labelEnterPassword: string;
        labelStrongPassword: string;
        labelAllowedButUnsafe: string;
    };
    readonly validate: ({ value, focused, allowEmpty }: IFieldState) => Promise<IValidationResult>;
    onValidate: (fieldState: IFieldState) => Promise<IValidationResult>;
    render(): JSX.Element;
}
export default PassphraseField;
