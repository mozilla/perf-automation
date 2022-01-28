import { ActionPayload } from "../payloads";
import { Action } from "../actions";
export interface UpdateFontSizePayload extends ActionPayload {
    action: Action.UpdateFontSize;
    /**
     * The font size to set the root to
     */
    size: number;
}
