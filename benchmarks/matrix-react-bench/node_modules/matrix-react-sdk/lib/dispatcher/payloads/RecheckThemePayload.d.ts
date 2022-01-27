import { ActionPayload } from "../payloads";
import { Action } from "../actions";
export interface RecheckThemePayload extends ActionPayload {
    action: Action.RecheckTheme;
    /**
     * Optionally specify the exact theme which is to be loaded.
     */
    forceTheme?: string;
}
