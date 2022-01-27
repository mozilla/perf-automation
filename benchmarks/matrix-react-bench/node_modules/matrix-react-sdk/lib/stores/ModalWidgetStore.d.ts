import { AsyncStoreWithClient } from "./AsyncStoreWithClient";
import { ActionPayload } from "../dispatcher/payloads";
import { IModal } from "../Modal";
import { IModalWidgetOpenRequestData, IModalWidgetReturnData, Widget } from "matrix-widget-api";
interface IState {
    modal?: IModal<any>;
    openedFromId?: string;
}
export declare class ModalWidgetStore extends AsyncStoreWithClient<IState> {
    private static internalInstance;
    private modalInstance;
    private openSourceWidgetId;
    private constructor();
    static get instance(): ModalWidgetStore;
    protected onAction(payload: ActionPayload): Promise<any>;
    canOpenModalWidget: () => boolean;
    openModalWidget: (requestData: IModalWidgetOpenRequestData, sourceWidget: Widget, widgetRoomId?: string) => void;
    closeModalWidget: (sourceWidget: Widget, data?: IModalWidgetReturnData) => void;
}
export {};
