import React, { ReactNode } from 'react';
import { IDialogProps } from "./IDialogProps";
export interface IFinishedOpts {
    continue: boolean;
    invite: boolean;
}
interface IProps extends IDialogProps {
    roomId: string;
    targetVersion: string;
    description?: ReactNode;
    doUpgrade?(opts: IFinishedOpts, fn: (progressText: string, progress: number, total: number) => void): Promise<void>;
}
interface IState {
    inviteUsersToNewRoom: boolean;
    progressText?: string;
    progress?: number;
    total?: number;
}
export default class RoomUpgradeWarningDialog extends React.Component<IProps, IState> {
    private readonly isPrivate;
    private readonly currentVersion;
    constructor(props: any);
    private onProgressCallback;
    private onContinue;
    private onCancel;
    private onInviteUsersToggle;
    private openBugReportDialog;
    render(): JSX.Element;
}
export {};
