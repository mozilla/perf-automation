import { ActionPayload } from "../payloads";
import { Action } from "../actions";
export interface SwitchSpacePayload extends ActionPayload {
    action: Action.SwitchSpace;
    /**
     * The number of the space to switch to, 1-indexed, 0 is Home.
     */
    num: number;
}
