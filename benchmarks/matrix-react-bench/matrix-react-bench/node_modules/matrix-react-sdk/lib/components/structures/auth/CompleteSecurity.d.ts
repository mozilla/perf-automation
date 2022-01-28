import React from 'react';
import { Phase } from '../../../stores/SetupEncryptionStore';
interface IProps {
    onFinished: () => void;
}
interface IState {
    phase: Phase;
    lostKeys: boolean;
}
export default class CompleteSecurity extends React.Component<IProps, IState> {
    constructor(props: IProps);
    private onStoreUpdate;
    private onSkipClick;
    componentWillUnmount(): void;
    render(): JSX.Element;
}
export {};
