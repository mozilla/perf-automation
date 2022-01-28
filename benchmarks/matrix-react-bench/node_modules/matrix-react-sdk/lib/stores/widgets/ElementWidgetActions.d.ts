import { IWidgetApiRequest } from "matrix-widget-api";
export declare enum ElementWidgetActions {
    ClientReady = "im.vector.ready",
    HangupCall = "im.vector.hangup",
    StartLiveStream = "im.vector.start_live_stream",
    OpenIntegrationManager = "integration_manager_open",
    /**
     * @deprecated Use MSC2931 instead
     */
    ViewRoom = "io.element.view_room"
}
/**
 * @deprecated Use MSC2931 instead
 */
export interface IViewRoomApiRequest extends IWidgetApiRequest {
    data: {
        room_id: string;
    };
}
