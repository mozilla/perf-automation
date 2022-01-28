import { SettingLevel } from "./SettingLevel";
export declare type CallbackFn = (changedInRoomId: string, atLevel: SettingLevel, newValAtLevel: any) => void;
/**
 * Generalized management class for dealing with watchers on a per-handler (per-level)
 * basis without duplicating code. Handlers are expected to push updates through this
 * class, which are then proxied outwards to any applicable watchers.
 */
export declare class WatchManager {
    private watchers;
    watchSetting(settingName: string, roomId: string | null, cb: CallbackFn): void;
    unwatchSetting(cb: CallbackFn): void;
    notifyUpdate(settingName: string, inRoomId: string | null, atLevel: SettingLevel, newValueAtLevel: any): void;
}
