import React from 'react';
import { IKeyBackupInfo } from "matrix-js-sdk/src/crypto/keybackup";
import { TrustInfo } from "matrix-js-sdk/src/crypto/backup";
interface IState {
    loading: boolean;
    error: null;
    backupKeyStored: boolean;
    backupKeyCached: boolean;
    backupKeyWellFormed: boolean;
    secretStorageKeyInAccount: boolean;
    secretStorageReady: boolean;
    backupInfo: IKeyBackupInfo;
    backupSigStatus: TrustInfo;
    sessionsRemaining: number;
}
export default class SecureBackupPanel extends React.PureComponent<{}, IState> {
    private unmounted;
    constructor(props: {});
    componentDidMount(): void;
    componentWillUnmount(): void;
    private onKeyBackupSessionsRemaining;
    private onKeyBackupStatus;
    private checkKeyBackupStatus;
    private loadBackupStatus;
    private getUpdatedDiagnostics;
    private startNewBackup;
    private deleteBackup;
    private restoreBackup;
    private resetSecretStorage;
    render(): JSX.Element;
}
export {};
