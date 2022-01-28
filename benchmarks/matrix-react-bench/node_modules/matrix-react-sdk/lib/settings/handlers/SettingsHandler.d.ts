/**
 * Represents the base class for all level handlers. This class performs no logic
 * and should be overridden.
 */
export default abstract class SettingsHandler {
    /**
     * Gets the value for a particular setting at this level for a particular room.
     * If no room is applicable, the roomId may be null. The roomId may not be
     * applicable to this level and may be ignored by the handler.
     * @param {string} settingName The name of the setting.
     * @param {String} roomId The room ID to read from, may be null.
     * @returns {*} The setting value, or null if not found.
     */
    abstract getValue(settingName: string, roomId: string): any;
    /**
     * Sets the value for a particular setting at this level for a particular room.
     * If no room is applicable, the roomId may be null. The roomId may not be
     * applicable to this level and may be ignored by the handler. Setting a value
     * to null will cause the level to remove the value. The current user should be
     * able to set the value prior to calling this.
     * @param {string} settingName The name of the setting to change.
     * @param {String} roomId The room ID to set the value in, may be null.
     * @param {*} newValue The new value for the setting, may be null.
     * @returns {Promise} Resolves when the setting has been saved.
     */
    abstract setValue(settingName: string, roomId: string, newValue: any): Promise<void>;
    /**
     * Determines if the current user is able to set the value of the given setting
     * in the given room at this level.
     * @param {string} settingName The name of the setting to check.
     * @param {String} roomId The room ID to check in, may be null
     * @returns {boolean} True if the setting can be set by the user, false otherwise.
     */
    abstract canSetValue(settingName: string, roomId: string): boolean;
    /**
     * Determines if this level is supported on this device.
     * @returns {boolean} True if this level is supported on the current device.
     */
    abstract isSupported(): boolean;
}
