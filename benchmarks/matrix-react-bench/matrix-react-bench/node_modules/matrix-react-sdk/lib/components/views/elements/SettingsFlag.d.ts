import React from "react";
import { SettingLevel } from "../../../settings/SettingLevel";
interface IProps {
    name: string;
    level: SettingLevel;
    roomId?: string;
    label?: string;
    isExplicit?: boolean;
    useCheckbox?: boolean;
    disabled?: boolean;
    onChange?(checked: boolean): void;
}
interface IState {
    value: boolean;
}
export default class SettingsFlag extends React.Component<IProps, IState> {
    constructor(props: IProps);
    private onChange;
    private checkBoxOnChange;
    private save;
    render(): JSX.Element;
}
export {};
