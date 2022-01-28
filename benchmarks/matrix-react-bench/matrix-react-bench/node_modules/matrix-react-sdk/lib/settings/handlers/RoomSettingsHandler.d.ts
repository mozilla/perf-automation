import MatrixClientBackedSettingsHandler from "./MatrixClientBackedSettingsHandler";
import { WatchManager } from "../WatchManager";
import { MatrixClient } from "matrix-js-sdk/src/client";
/**
 * Gets and sets settings at the "room" level.
 */
export default class RoomSettingsHandler extends MatrixClientBackedSettingsHandler {
    private watchers;
    constructor(watchers: WatchManager);
    protected initMatrixClient(oldClient: MatrixClient, newClient: MatrixClient): void;
    private onEvent;
    getValue(settingName: string, roomId: string): any;
    setValue(settingName: string, roomId: string, newValue: any): Promise<void>;
    canSetValue(settingName: string, roomId: string): boolean;
    isSupported(): boolean;
    private getSettings;
}
