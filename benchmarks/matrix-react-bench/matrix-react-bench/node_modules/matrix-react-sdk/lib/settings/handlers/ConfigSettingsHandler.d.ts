import SettingsHandler from "./SettingsHandler";
/**
 * Gets and sets settings at the "config" level. This handler does not make use of the
 * roomId parameter.
 */
export default class ConfigSettingsHandler extends SettingsHandler {
    private featureNames;
    constructor(featureNames: string[]);
    getValue(settingName: string, roomId: string): any;
    setValue(settingName: string, roomId: string, newValue: any): Promise<void>;
    canSetValue(settingName: string, roomId: string): boolean;
    isSupported(): boolean;
}
