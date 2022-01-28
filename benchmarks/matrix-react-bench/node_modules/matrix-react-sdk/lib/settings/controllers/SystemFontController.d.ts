import SettingController from "./SettingController";
import { SettingLevel } from "../SettingLevel";
export default class SystemFontController extends SettingController {
    constructor();
    onChange(level: SettingLevel, roomId: string, newValue: any): void;
}
