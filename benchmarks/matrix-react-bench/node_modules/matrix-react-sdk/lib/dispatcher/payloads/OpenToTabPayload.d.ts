import { ActionPayload } from "../payloads";
import { Action } from "../actions";
export interface OpenToTabPayload extends ActionPayload {
    action: Action.ViewUserSettings | string;
    /**
     * The tab ID to open in the settings view to start, if possible.
     */
    initialTabId?: string;
}
