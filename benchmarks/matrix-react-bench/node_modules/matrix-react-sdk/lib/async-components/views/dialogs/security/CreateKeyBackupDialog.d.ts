import React from 'react';
import { IDialogProps } from "../../../../components/views/dialogs/IDialogProps";
declare enum Phase {
    Passphrase = "passphrase",
    PassphraseConfirm = "passphrase_confirm",
    ShowKey = "show_key",
    KeepItSafe = "keep_it_safe",
    BackingUp = "backing_up",
    Done = "done",
    OptOutConfirm = "opt_out_confirm"
}
interface IProps extends IDialogProps {
}
interface IState {
    secureSecretStorage: boolean;
    phase: Phase;
    passPhrase: string;
    passPhraseValid: boolean;
    passPhraseConfirm: string;
    copied: boolean;
    downloaded: boolean;
    error?: string;
}
export default class CreateKeyBackupDialog extends React.PureComponent<IProps, IState> {
    private keyBackupInfo;
    private recoveryKeyNode;
    private passphraseField;
    constructor(props: IProps);
    componentDidMount(): Promise<void>;
    private onCopyClick;
    private onDownloadClick;
    private createBackup;
    private onCancel;
    private onDone;
    private onSetUpClick;
    private onSkipPassPhraseClick;
    private onPassPhraseNextClick;
    private onPassPhraseConfirmNextClick;
    private onSetAgainClick;
    private onKeepItSafeBackClick;
    private onPassPhraseValidate;
    private onPassPhraseChange;
    private onPassPhraseConfirmChange;
    private renderPhasePassPhrase;
    private renderPhasePassPhraseConfirm;
    private renderPhaseShowKey;
    private renderPhaseKeepItSafe;
    private renderBusyPhase;
    private renderPhaseDone;
    private renderPhaseOptOutConfirm;
    private titleForPhase;
    render(): JSX.Element;
}
export {};
