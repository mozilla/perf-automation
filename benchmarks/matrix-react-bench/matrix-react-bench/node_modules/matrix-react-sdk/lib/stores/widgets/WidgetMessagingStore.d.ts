import { ClientWidgetApi, Widget } from "matrix-widget-api";
import { AsyncStoreWithClient } from "../AsyncStoreWithClient";
import { ActionPayload } from "../../dispatcher/payloads";
/**
 * Temporary holding store for widget messaging instances. This is eventually
 * going to be merged with a more complete WidgetStore, but for now it's
 * easiest to split this into a single place.
 */
export declare class WidgetMessagingStore extends AsyncStoreWithClient<unknown> {
    private static internalInstance;
    private widgetMap;
    constructor();
    static get instance(): WidgetMessagingStore;
    protected onAction(payload: ActionPayload): Promise<any>;
    protected onReady(): Promise<any>;
    storeMessaging(widget: Widget, widgetApi: ClientWidgetApi): void;
    stopMessaging(widget: Widget): void;
    getMessaging(widget: Widget): ClientWidgetApi;
    /**
     * Stops the widget messaging instance for a given widget ID.
     * @param {string} widgetId The widget ID.
     * @deprecated Widget IDs are not globally unique.
     */
    stopMessagingById(widgetId: string): void;
    /**
     * Gets the widget messaging class for a given widget ID.
     * @param {string} widgetId The widget ID.
     * @returns {ClientWidgetApi} The widget API, or a falsey value if not found.
     * @deprecated Widget IDs are not globally unique.
     */
    getMessagingForId(widgetId: string): ClientWidgetApi;
}
