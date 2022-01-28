import { WidgetType } from "./widgets/WidgetType";
import { Room } from "matrix-js-sdk/src/models/room";
export default class ScalarAuthClient {
    private apiUrl;
    private uiUrl;
    private scalarToken;
    private termsInteractionCallback;
    private isDefaultManager;
    constructor(apiUrl: string, uiUrl: string);
    private writeTokenToStore;
    private readTokenFromStore;
    private readToken;
    setTermsInteractionCallback(callback: any): void;
    connect(): Promise<void>;
    hasCredentials(): boolean;
    getScalarToken(): Promise<string>;
    private getAccountName;
    private checkToken;
    registerForToken(): Promise<string>;
    exchangeForScalarToken(openidTokenObject: any): Promise<string>;
    getScalarPageTitle(url: string): Promise<string>;
    /**
     * Mark all assets associated with the specified widget as "disabled" in the
     * integration manager database.
     * This can be useful to temporarily prevent purchased assets from being displayed.
     * @param  {WidgetType} widgetType The Widget Type to disable assets for
     * @param  {string} widgetId   The widget ID to disable assets for
     * @return {Promise}           Resolves on completion
     */
    disableWidgetAssets(widgetType: WidgetType, widgetId: string): Promise<void>;
    getScalarInterfaceUrlForRoom(room: Room, screen: string, id: string): string;
    getStarterLink(starterLinkUrl: string): string;
}
