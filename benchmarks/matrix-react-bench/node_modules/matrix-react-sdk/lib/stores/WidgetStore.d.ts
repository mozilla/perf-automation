import { Room } from "matrix-js-sdk/src/models/room";
import { IWidget } from "matrix-widget-api";
import { ActionPayload } from "../dispatcher/payloads";
import { AsyncStoreWithClient } from "./AsyncStoreWithClient";
interface IState {
}
export interface IApp extends IWidget {
    roomId: string;
    eventId: string;
    avatar_url: string;
}
interface IRoomWidgets {
    widgets: IApp[];
}
export default class WidgetStore extends AsyncStoreWithClient<IState> {
    private static internalInstance;
    private widgetMap;
    private roomMap;
    private constructor();
    static get instance(): WidgetStore;
    private initRoom;
    protected onReady(): Promise<any>;
    protected onNotReady(): Promise<any>;
    protected onAction(payload: ActionPayload): Promise<void>;
    private onWidgetEchoStoreUpdate;
    private generateApps;
    private loadRoomWidgets;
    private onRoom;
    private onRoomStateEvents;
    getRoom: (roomId: string, initIfNeeded?: boolean) => IRoomWidgets;
    getApps(roomId: string): IApp[];
    doesRoomHaveConference(room: Room): boolean;
    isJoinedToConferenceIn(room: Room): boolean;
}
export {};
