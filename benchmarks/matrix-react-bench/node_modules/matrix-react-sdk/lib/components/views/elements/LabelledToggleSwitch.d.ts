import React from "react";
interface IProps {
    value: boolean;
    label: string;
    disabled?: boolean;
    toggleInFront?: boolean;
    className?: string;
    onChange(checked: boolean): void;
}
export default class LabelledToggleSwitch extends React.PureComponent<IProps> {
    render(): JSX.Element;
}
export {};
