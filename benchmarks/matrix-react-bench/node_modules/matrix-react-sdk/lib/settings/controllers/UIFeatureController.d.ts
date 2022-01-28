import SettingController from "./SettingController";
import { SettingLevel } from "../SettingLevel";
/**
 * Enforces that a boolean setting cannot be enabled if the corresponding
 * UI feature is disabled. If the UI feature is enabled, the setting value
 * is unchanged.
 *
 * Settings using this controller are assumed to return `false` when disabled.
 */
export default class UIFeatureController extends SettingController {
    private uiFeatureName;
    private forcedValue;
    constructor(uiFeatureName: string, forcedValue?: boolean);
    getValueOverride(level: SettingLevel, roomId: string, calculatedValue: any, calculatedAtLevel: SettingLevel): any;
    get settingDisabled(): boolean;
}
