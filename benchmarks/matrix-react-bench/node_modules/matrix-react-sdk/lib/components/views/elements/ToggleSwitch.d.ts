/// <reference types="react" />
interface IProps {
    checked: boolean;
    disabled: boolean;
    onChange(checked: boolean): void;
}
declare const _default: ({ checked, disabled, onChange, ...props }: IProps) => JSX.Element;
export default _default;
