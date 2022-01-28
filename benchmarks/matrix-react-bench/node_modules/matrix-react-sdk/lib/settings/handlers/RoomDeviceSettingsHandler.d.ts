import SettingsHandler from "./SettingsHandler";
import { WatchManager } from "../WatchManager";
/**
 * Gets and sets settings at the "room-device" level for the current device in a particular
 * room.
 */
export default class RoomDeviceSettingsHandler extends SettingsHandler {
    private watchers;
    constructor(watchers: WatchManager);
    getValue(settingName: string, roomId: string): any;
    setValue(settingName: string, roomId: string, newValue: any): Promise<void>;
    canSetValue(settingName: string, roomId: string): boolean;
    isSupported(): boolean;
    private read;
    private getKey;
}
