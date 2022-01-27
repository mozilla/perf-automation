import React from 'react';
import { IKeyBackupInfo, IKeyBackupRestoreResult } from "matrix-js-sdk/src/crypto/keybackup";
import { ISecretStorageKeyInfo } from "matrix-js-sdk/src/crypto/api";
import { IDialogProps } from "../IDialogProps";
declare enum RestoreType {
    Passphrase = "passphrase",
    RecoveryKey = "recovery_key",
    SecretStorage = "secret_storage"
}
declare enum ProgressState {
    PreFetch = "prefetch",
    Fetch = "fetch",
    LoadKeys = "load_keys"
}
interface IProps extends IDialogProps {
    showSummary?: boolean;
    keyCallback?: (key: Uint8Array) => void;
}
interface IState {
    backupInfo: IKeyBackupInfo;
    backupKeyStored: Record<string, ISecretStorageKeyInfo>;
    loading: boolean;
    loadError: string;
    restoreError: {
        errcode: string;
    };
    recoveryKey: string;
    recoverInfo: IKeyBackupRestoreResult;
    recoveryKeyValid: boolean;
    forceRecoveryKey: boolean;
    passPhrase: string;
    restoreType: RestoreType;
    progress: {
        stage: ProgressState;
        total?: number;
        successes?: number;
        failures?: number;
    };
}
export default class RestoreKeyBackupDialog extends React.PureComponent<IProps, IState> {
    static defaultProps: {
        showSummary: boolean;
    };
    constructor(props: any);
    componentDidMount(): void;
    private onCancel;
    private onDone;
    private onUseRecoveryKeyClick;
    private progressCallback;
    private onResetRecoveryClick;
    private onRecoveryKeyChange;
    private onPassPhraseNext;
    private onRecoveryKeyNext;
    private onPassPhraseChange;
    private restoreWithSecretStorage;
    private restoreWithCachedKey;
    private loadBackupStatus;
    render(): JSX.Element;
}
export {};
