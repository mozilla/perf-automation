import SettingController from "./SettingController";
import { SettingLevel } from "../SettingLevel";
export default class ThemeController extends SettingController {
    static isLogin: boolean;
    getValueOverride(level: SettingLevel, roomId: string, calculatedValue: any, calculatedAtLevel: SettingLevel): any;
}
