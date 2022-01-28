import SettingController from "./SettingController";
import { SettingLevel } from "../SettingLevel";
export default class UseSystemFontController extends SettingController {
    constructor();
    onChange(level: SettingLevel, roomId: string, newValue: any): void;
}
