import { SERVICE_TYPES } from 'matrix-js-sdk/src/service-types';
export declare class TermsNotSignedError extends Error {
}
/**
 * Class representing a service that may have terms & conditions that
 * require agreement from the user before the user can use that service.
 */
export declare class Service {
    serviceType: SERVICE_TYPES;
    baseUrl: string;
    accessToken: string;
    /**
     * @param {MatrixClient.SERVICE_TYPES} serviceType The type of service
     * @param {string} baseUrl The Base URL of the service (ie. before '/_matrix')
     * @param {string} accessToken The user's access token for the service
     */
    constructor(serviceType: SERVICE_TYPES, baseUrl: string, accessToken: string);
}
export interface LocalisedPolicy {
    name: string;
    url: string;
}
export interface Policy {
    version: string;
    [lang: string]: LocalisedPolicy;
}
export declare type Policies = {
    [policy: string]: Policy;
};
export declare type TermsInteractionCallback = (policiesAndServicePairs: {
    service: Service;
    policies: Policies;
}[], agreedUrls: string[], extraClassNames?: string) => Promise<string[]>;
/**
 * Start a flow where the user is presented with terms & conditions for some services
 *
 * @param {Service[]} services Object with keys 'serviceType', 'baseUrl', 'accessToken'
 * @param {function} interactionCallback Function called with:
 *      * an array of { service: {Service}, policies: {terms response from API} }
 *      * an array of URLs the user has already agreed to
 *     Must return a Promise which resolves with a list of URLs of documents agreed to
 * @returns {Promise} resolves when the user agreed to all necessary terms or rejects
 *     if they cancel.
 */
export declare function startTermsFlow(services: Service[], interactionCallback?: TermsInteractionCallback): Promise<any[]>;
export declare function dialogTermsInteractionCallback(policiesAndServicePairs: {
    service: Service;
    policies: {
        [policy: string]: Policy;
    };
}[], agreedUrls: string[], extraClassNames?: string): Promise<string[]>;
