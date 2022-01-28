export declare class AbortedIdentityActionError extends Error {
}
export default class IdentityAuthClient {
    private accessToken;
    private tempClient;
    private authEnabled;
    /**
     * Creates a new identity auth client
     * @param {string} identityUrl The URL to contact the identity server with.
     * When provided, this class will operate solely within memory, refusing to
     * persist any information such as tokens. Default null (not provided).
     */
    constructor(identityUrl?: string);
    private get matrixClient();
    private writeToken;
    private readToken;
    hasCredentials(): boolean;
    getAccessToken({ check }?: {
        check?: boolean;
    }): Promise<string>;
    private checkToken;
    registerForToken(check?: boolean): Promise<string>;
}
