import SettingController from "./SettingController";
import { SettingLevel } from "../SettingLevel";
/**
 * For animation-like settings, this controller checks whether the user has
 * indicated they prefer reduced motion via browser or OS level settings.
 * If they have, this forces the setting value to false.
 */
export default class ReducedMotionController extends SettingController {
    getValueOverride(level: SettingLevel, roomId: string, calculatedValue: any, calculatedAtLevel: SettingLevel): any;
    get settingDisabled(): boolean;
    private prefersReducedMotion;
}
