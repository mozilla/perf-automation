import React from 'react';
declare enum Phases {
    Display = "display",
    Edit = "edit"
}
interface IProps {
    onValueChanged?: (value: string, shouldSubmit: boolean) => void;
    initialValue?: string;
    label?: string;
    placeholder?: string;
    className?: string;
    labelClassName?: string;
    placeholderClassName?: string;
    blurToCancel?: boolean;
    blurToSubmit?: boolean;
    editable?: boolean;
}
interface IState {
    phase: Phases;
}
export default class EditableText extends React.Component<IProps, IState> {
    value: string;
    private placeholder;
    private editableDiv;
    static defaultProps: Partial<IProps>;
    constructor(props: IProps);
    UNSAFE_componentWillReceiveProps(nextProps: IProps): void;
    componentDidMount(): void;
    private showPlaceholder;
    private cancelEdit;
    private onValueChanged;
    private onKeyDown;
    private onKeyUp;
    private onClickDiv;
    private onFocus;
    private onFinish;
    private onBlur;
    render(): JSX.Element;
}
export {};
