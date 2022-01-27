import React from 'react';
import { ISecretStorageKeyInfo } from "matrix-js-sdk/src/crypto/api";
import { IDialogProps } from "../IDialogProps";
interface IProps extends IDialogProps {
    keyInfo: ISecretStorageKeyInfo;
    checkPrivateKey: (k: {
        passphrase?: string;
        recoveryKey?: string;
    }) => boolean;
}
interface IState {
    recoveryKey: string;
    recoveryKeyValid: boolean | null;
    recoveryKeyCorrect: boolean | null;
    recoveryKeyFileError: boolean | null;
    forceRecoveryKey: boolean;
    passPhrase: string;
    keyMatches: boolean | null;
    resetting: boolean;
}
export default class AccessSecretStorageDialog extends React.PureComponent<IProps, IState> {
    private fileUpload;
    constructor(props: any);
    private onCancel;
    private onUseRecoveryKeyClick;
    private validateRecoveryKeyOnChange;
    private validateRecoveryKey;
    private onRecoveryKeyChange;
    private onRecoveryKeyFileChange;
    private onRecoveryKeyFileUploadClick;
    private onPassPhraseNext;
    private onRecoveryKeyNext;
    private onPassPhraseChange;
    private onResetAllClick;
    private onConfirmResetAllClick;
    private getKeyValidationText;
    render(): JSX.Element;
}
export {};
