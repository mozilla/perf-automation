import { ICryptoCallbacks } from 'matrix-js-sdk/src/matrix';
import { ISecretStorageKeyInfo } from 'matrix-js-sdk/src/crypto/api';
import { MatrixClient } from 'matrix-js-sdk/src/client';
/**
 * This can be used by other components to check if secret storage access is in
 * progress, so that we can e.g. avoid intermittently showing toasts during
 * secret storage setup.
 *
 * @returns {bool}
 */
export declare function isSecretStorageBeingAccessed(): boolean;
export declare class AccessCancelledError extends Error {
    constructor();
}
export declare function getDehydrationKey(keyInfo: ISecretStorageKeyInfo, checkFunc: (Uint8Array: any) => void): Promise<Uint8Array>;
export declare const crossSigningCallbacks: ICryptoCallbacks;
export declare function promptForBackupPassphrase(): Promise<Uint8Array>;
/**
 * This helper should be used whenever you need to access secret storage. It
 * ensures that secret storage (and also cross-signing since they each depend on
 * each other in a cycle of sorts) have been bootstrapped before running the
 * provided function.
 *
 * Bootstrapping secret storage may take one of these paths:
 * 1. Create secret storage from a passphrase and store cross-signing keys
 *    in secret storage.
 * 2. Access existing secret storage by requesting passphrase and accessing
 *    cross-signing keys as needed.
 * 3. All keys are loaded and there's nothing to do.
 *
 * Additionally, the secret storage keys are cached during the scope of this function
 * to ensure the user is prompted only once for their secret storage
 * passphrase. The cache is then cleared once the provided function completes.
 *
 * @param {Function} [func] An operation to perform once secret storage has been
 * bootstrapped. Optional.
 * @param {bool} [forceReset] Reset secret storage even if it's already set up
 */
export declare function accessSecretStorage(func?: () => Promise<void>, forceReset?: boolean): Promise<void>;
export declare function tryToUnlockSecretStorageWithDehydrationKey(client: MatrixClient): Promise<void>;
