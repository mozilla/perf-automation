import { ReactNode } from 'react';
export declare class ValidatedServerConfig {
    hsUrl: string;
    hsName: string;
    hsNameIsDifferent: string;
    isUrl: string;
    isDefault: boolean;
    isNameResolvable: boolean;
    warning: string;
}
export interface IAuthComponentState {
    serverIsAlive: boolean;
    serverErrorIsFatal: boolean;
    serverDeadError?: ReactNode;
}
export default class AutoDiscoveryUtils {
    /**
     * Checks if a given error or error message is considered an error
     * relating to the liveliness of the server. Must be an error returned
     * from this AutoDiscoveryUtils class.
     * @param {string | Error} error The error to check
     * @returns {boolean} True if the error is a liveliness error.
     */
    static isLivelinessError(error: string | Error): boolean;
    /**
     * Gets the common state for auth components (login, registration, forgot
     * password) for a given validation error.
     * @param {Error} err The error encountered.
     * @param {string} pageName The page for which the error should be customized to. See
     * implementation for known values.
     * @returns {*} The state for the component, given the error.
     */
    static authComponentStateForError(err: string | Error | null, pageName?: string): IAuthComponentState;
    /**
     * Validates a server configuration, using a pair of URLs as input.
     * @param {string} homeserverUrl The homeserver URL.
     * @param {string} identityUrl The identity server URL.
     * @param {boolean} syntaxOnly If true, errors relating to liveliness of the servers will
     * not be raised.
     * @returns {Promise<ValidatedServerConfig>} Resolves to the validated configuration.
     */
    static validateServerConfigWithStaticUrls(homeserverUrl: string, identityUrl?: string, syntaxOnly?: boolean): Promise<ValidatedServerConfig>;
    /**
     * Validates a server configuration, using a homeserver domain name as input.
     * @param {string} serverName The homeserver domain name (eg: "matrix.org") to validate.
     * @returns {Promise<ValidatedServerConfig>} Resolves to the validated configuration.
     */
    static validateServerName(serverName: string): Promise<ValidatedServerConfig>;
    /**
     * Validates a server configuration, using a pre-calculated AutoDiscovery result as
     * input.
     * @param {string} serverName The domain name the AutoDiscovery result is for.
     * @param {*} discoveryResult The AutoDiscovery result.
     * @param {boolean} syntaxOnly If true, errors relating to liveliness of the servers will not be raised.
     * @param {boolean} isSynthetic If true, then the discoveryResult was synthesised locally.
     * @returns {Promise<ValidatedServerConfig>} Resolves to the validated configuration.
     */
    static buildValidatedConfigFromDiscovery(serverName: string, discoveryResult: any, syntaxOnly?: boolean, isSynthetic?: boolean): ValidatedServerConfig;
}
