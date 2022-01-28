import { ActionPayload } from "../payloads";
import { Action } from "../actions";
export interface UpdateSystemFontPayload extends ActionPayload {
    action: Action.UpdateSystemFont;
    /**
     * Specify whether to use a system font or the stylesheet font
     */
    useSystemFont: boolean;
    /**
     * The system font to use
     */
    font: string;
}
