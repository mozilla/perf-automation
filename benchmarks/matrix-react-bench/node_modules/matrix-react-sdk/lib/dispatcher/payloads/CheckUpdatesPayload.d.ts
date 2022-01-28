import { ActionPayload } from "../payloads";
import { Action } from "../actions";
import { UpdateCheckStatus } from "../../BasePlatform";
export interface CheckUpdatesPayload extends ActionPayload {
    action: Action.CheckUpdates;
    /**
     * The current phase of the manual update check.
     */
    status: UpdateCheckStatus;
    /**
     * Detail string relating to the current status, typically for error details.
     */
    detail?: string;
}
