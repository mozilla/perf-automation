import SettingController from "./SettingController";
import { SettingLevel } from "../SettingLevel";
export declare function isPushNotifyDisabled(): boolean;
export declare class NotificationsEnabledController extends SettingController {
    getValueOverride(level: SettingLevel, roomId: string, calculatedValue: any, calculatedAtLevel: SettingLevel): any;
    onChange(level: SettingLevel, roomId: string, newValue: any): void;
}
export declare class NotificationBodyEnabledController extends SettingController {
    getValueOverride(level: SettingLevel, roomId: string, calculatedValue: any): any;
}
