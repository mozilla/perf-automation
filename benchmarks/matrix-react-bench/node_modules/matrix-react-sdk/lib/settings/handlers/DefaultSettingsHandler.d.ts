import SettingsHandler from "./SettingsHandler";
/**
 * Gets settings at the "default" level. This handler does not support setting values.
 * This handler does not make use of the roomId parameter.
 */
export default class DefaultSettingsHandler extends SettingsHandler {
    private defaults;
    private invertedDefaults;
    /**
     * Creates a new default settings handler with the given defaults
     * @param {object} defaults The default setting values, keyed by setting name.
     * @param {object} invertedDefaults The default inverted setting values, keyed by setting name.
     */
    constructor(defaults: Record<string, any>, invertedDefaults: Record<string, any>);
    getValue(settingName: string, roomId: string): any;
    setValue(settingName: string, roomId: string, newValue: any): Promise<void>;
    canSetValue(settingName: string, roomId: string): boolean;
    isSupported(): boolean;
}
