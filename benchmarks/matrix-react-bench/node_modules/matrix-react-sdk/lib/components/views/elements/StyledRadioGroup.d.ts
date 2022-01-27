import { ReactNode } from "react";
export interface IDefinition<T extends string> {
    value: T;
    className?: string;
    disabled?: boolean;
    label: ReactNode;
    description?: ReactNode;
    checked?: boolean;
}
interface IProps<T extends string> {
    name: string;
    className?: string;
    definitions: IDefinition<T>[];
    value?: T;
    outlined?: boolean;
    disabled?: boolean;
    onChange(newValue: T): void;
}
declare function StyledRadioGroup<T extends string>({ name, definitions, value, className, outlined, disabled, onChange, }: IProps<T>): JSX.Element;
export default StyledRadioGroup;
