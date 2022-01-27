import SettingController from "./SettingController";
import { SettingLevel } from "../SettingLevel";
export default class FontSizeController extends SettingController {
    constructor();
    onChange(level: SettingLevel, roomId: string, newValue: any): void;
}
