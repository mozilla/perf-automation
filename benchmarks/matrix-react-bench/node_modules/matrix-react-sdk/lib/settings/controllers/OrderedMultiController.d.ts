import SettingController from "./SettingController";
import { SettingLevel } from "../SettingLevel";
/**
 * Allows for multiple controllers to affect a setting. The first controller
 * provided to this class which overrides the setting value will affect
 * the value - other controllers are not called. Change notification handlers
 * are proxied through to all controllers.
 *
 * Similarly, the first controller which indicates that a setting is disabled
 * will be used - other controllers will not be considered.
 */
export declare class OrderedMultiController extends SettingController {
    readonly controllers: SettingController[];
    constructor(controllers: SettingController[]);
    getValueOverride(level: SettingLevel, roomId: string, calculatedValue: any, calculatedAtLevel: SettingLevel): any;
    onChange(level: SettingLevel, roomId: string, newValue: any): void;
    get settingDisabled(): boolean;
}
