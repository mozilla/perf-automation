import React from 'react';
import { MatrixClient } from "matrix-js-sdk/src/client";
import { IAuthData } from "matrix-js-sdk/src/interactive-auth";
import { IDialogProps } from "./IDialogProps";
interface IDialogAesthetics {
    [x: string]: {
        [x: number]: {
            title: string;
            body: string;
            continueText: string;
            continueKind: string;
        };
    };
}
interface IProps extends IDialogProps {
    matrixClient: MatrixClient;
    authData?: IAuthData;
    makeRequest: (auth: IAuthData) => Promise<IAuthData>;
    title?: string;
    body?: string;
    aestheticsForStagePhases?: IDialogAesthetics;
}
interface IState {
    authError: Error;
    uiaStage: number | string;
    uiaStagePhase: number | string;
}
export default class InteractiveAuthDialog extends React.Component<IProps, IState> {
    constructor(props: IProps);
    private getDefaultDialogAesthetics;
    private onAuthFinished;
    private onUpdateStagePhase;
    private onDismissClick;
    render(): JSX.Element;
}
export {};
