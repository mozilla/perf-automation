import React from 'react';
interface IProps {
    className?: string;
    onChange?: (value: string) => void;
    onClear?: () => void;
    onJoinClick?: (value: string) => void;
    placeholder?: string;
    showJoinButton?: boolean;
    initialText?: string;
}
interface IState {
    value: string;
}
export default class DirectorySearchBox extends React.Component<IProps, IState> {
    private input;
    constructor(props: IProps);
    private onClearClick;
    private onChange;
    private onKeyUp;
    private onJoinButtonClick;
    render(): JSX.Element;
}
export {};
