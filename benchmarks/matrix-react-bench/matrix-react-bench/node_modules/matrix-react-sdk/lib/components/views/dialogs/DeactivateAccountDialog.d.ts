import React from 'react';
interface IProps {
    onFinished: (success: boolean) => void;
}
interface IState {
    shouldErase: boolean;
    errStr: string;
    authData: any;
    authEnabled: boolean;
    bodyText: string;
    continueText: string;
    continueKind: string;
}
export default class DeactivateAccountDialog extends React.Component<IProps, IState> {
    constructor(props: any);
    private onStagePhaseChange;
    private onUIAuthFinished;
    private onUIAuthComplete;
    private onEraseFieldChange;
    private onCancel;
    private initAuth;
    render(): JSX.Element;
}
export {};
