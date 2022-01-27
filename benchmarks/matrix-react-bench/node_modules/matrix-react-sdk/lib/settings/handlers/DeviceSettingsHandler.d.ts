import SettingsHandler from "./SettingsHandler";
import { CallbackFn, WatchManager } from "../WatchManager";
/**
 * Gets and sets settings at the "device" level for the current device.
 * This handler does not make use of the roomId parameter. This handler
 * will special-case features to support legacy settings.
 */
export default class DeviceSettingsHandler extends SettingsHandler {
    private featureNames;
    private watchers;
    /**
     * Creates a new device settings handler
     * @param {string[]} featureNames The names of known features.
     * @param {WatchManager} watchers The watch manager to notify updates to
     */
    constructor(featureNames: string[], watchers: WatchManager);
    getValue(settingName: string, roomId: string): any;
    setValue(settingName: string, roomId: string, newValue: any): Promise<void>;
    canSetValue(settingName: string, roomId: string): boolean;
    isSupported(): boolean;
    watchSetting(settingName: string, roomId: string, cb: CallbackFn): void;
    unwatchSetting(cb: CallbackFn): void;
    private getSettings;
    private readFeature;
    private writeFeature;
}
