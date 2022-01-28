import SettingController from "./SettingController";
import { SettingLevel } from "../SettingLevel";
export default class CustomStatusController extends SettingController {
    onChange(level: SettingLevel, roomId: string, newValue: any): void;
}
