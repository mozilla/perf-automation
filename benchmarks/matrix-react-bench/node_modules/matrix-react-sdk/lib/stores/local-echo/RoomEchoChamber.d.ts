import { GenericEchoChamber } from "./GenericEchoChamber";
import { RoomNotifState } from "../../RoomNotifs";
import { RoomEchoContext } from "./RoomEchoContext";
export declare enum CachedRoomKey {
    NotificationVolume = 0
}
export declare class RoomEchoChamber extends GenericEchoChamber<RoomEchoContext, CachedRoomKey, RoomNotifState> {
    private properties;
    constructor(context: RoomEchoContext);
    protected onClientChanged(oldClient: any, newClient: any): void;
    private onAccountData;
    private updateNotificationVolume;
    get notificationVolume(): RoomNotifState;
    set notificationVolume(v: RoomNotifState);
}
