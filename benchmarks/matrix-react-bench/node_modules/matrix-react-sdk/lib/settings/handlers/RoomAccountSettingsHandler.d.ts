import MatrixClientBackedSettingsHandler from "./MatrixClientBackedSettingsHandler";
import { WatchManager } from "../WatchManager";
import { MatrixClient } from "matrix-js-sdk/src/client";
/**
 * Gets and sets settings at the "room-account" level for the current user.
 */
export default class RoomAccountSettingsHandler extends MatrixClientBackedSettingsHandler {
    private watchers;
    constructor(watchers: WatchManager);
    protected initMatrixClient(oldClient: MatrixClient, newClient: MatrixClient): void;
    private onAccountData;
    getValue(settingName: string, roomId: string): any;
    setValue(settingName: string, roomId: string, newValue: any): Promise<void>;
    canSetValue(settingName: string, roomId: string): boolean;
    isSupported(): boolean;
    private getSettings;
}
