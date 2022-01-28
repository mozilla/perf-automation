import { ActionPayload } from "../payloads";
import { Action } from "../actions";
export interface ToggleRightPanelPayload extends ActionPayload {
    action: Action.ToggleRightPanel;
    /**
     * The type of room that the panel is toggled in.
     */
    type: "group" | "room";
}
