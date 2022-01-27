import type { Room } from "matrix-js-sdk/src/models/room";
import ScalarAuthClient from "../ScalarAuthClient";
export declare enum Kind {
    Account = "account",
    Config = "config",
    Homeserver = "homeserver"
}
export declare class IntegrationManagerInstance {
    readonly apiUrl: string;
    readonly uiUrl: string;
    readonly kind: string;
    readonly id: string;
    constructor(kind: string, apiUrl: string, uiUrl?: string, id?: string);
    get name(): string;
    get trimmedApiUrl(): string;
    getScalarClient(): ScalarAuthClient;
    open(room?: Room, screen?: string, integrationId?: string): Promise<void>;
}
