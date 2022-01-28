import { Widget, WidgetKind } from "matrix-widget-api";
export declare enum OIDCState {
    Allowed = 0,
    Denied = 1,
    Unknown = 2
}
export declare class WidgetPermissionStore {
    private static internalInstance;
    private constructor();
    static get instance(): WidgetPermissionStore;
    private packSettingKey;
    getOIDCState(widget: Widget, kind: WidgetKind, roomId?: string): OIDCState;
    setOIDCState(widget: Widget, kind: WidgetKind, roomId: string, newState: OIDCState): void;
}
