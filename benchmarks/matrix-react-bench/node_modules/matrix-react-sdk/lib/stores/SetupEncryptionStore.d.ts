/// <reference types="node" />
import EventEmitter from 'events';
import { VerificationRequest } from "matrix-js-sdk/src/crypto/verification/request/VerificationRequest";
import { IKeyBackupInfo } from "matrix-js-sdk/src/crypto/keybackup";
import { ISecretStorageKeyInfo } from "matrix-js-sdk/src/crypto/api";
export declare enum Phase {
    Loading = 0,
    Intro = 1,
    Busy = 2,
    Done = 3,
    ConfirmSkip = 4,
    Finished = 5,
    ConfirmReset = 6
}
export declare class SetupEncryptionStore extends EventEmitter {
    private started;
    phase: Phase;
    verificationRequest: VerificationRequest;
    backupInfo: IKeyBackupInfo;
    keyId: string;
    keyInfo: ISecretStorageKeyInfo;
    hasDevicesToVerifyAgainst: boolean;
    static sharedInstance(): SetupEncryptionStore;
    start(): void;
    stop(): void;
    fetchKeyInfo(): Promise<void>;
    usePassPhrase(): Promise<void>;
    private onUserTrustStatusChanged;
    onVerificationRequest: (request: VerificationRequest) => void;
    onVerificationRequestChange: () => void;
    skip(): void;
    skipConfirm(): void;
    returnAfterSkip(): void;
    reset(): void;
    resetConfirm(): Promise<void>;
    returnAfterReset(): void;
    done(): void;
    private setActiveVerificationRequest;
    lostKeys(): boolean;
}
