import React from 'react';
interface IProps {
    value: number;
    maxValue: number;
    usersDefault: number;
    disabled?: boolean;
    onChange?: (value: number, powerLevelKey: string) => void;
    powerLevelKey?: string;
    label?: string;
}
interface IState {
    levelRoleMap: {};
    options: number[];
    customValue: number;
    selectValue: number | string;
    custom?: boolean;
    customLevel?: number;
}
export default class PowerSelector extends React.Component<IProps, IState> {
    static defaultProps: Partial<IProps>;
    constructor(props: IProps);
    UNSAFE_componentWillMount(): void;
    UNSAFE_componentWillReceiveProps(newProps: IProps): void;
    private initStateFromProps;
    private onSelectChange;
    private onCustomChange;
    private onCustomBlur;
    private onCustomKeyDown;
    render(): JSX.Element;
}
export {};
