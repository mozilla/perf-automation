import React from 'react';
import { IDialogProps } from "../IDialogProps";
interface IProps extends IDialogProps {
}
interface IState {
    icon: string;
}
export default class SetupEncryptionDialog extends React.Component<IProps, IState> {
    private store;
    constructor(props: IProps);
    componentDidMount(): void;
    componentWillUnmount(): void;
    private onStoreUpdate;
    render(): JSX.Element;
}
export {};
