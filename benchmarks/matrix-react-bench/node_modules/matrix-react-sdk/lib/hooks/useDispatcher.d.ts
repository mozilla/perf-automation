import { ActionPayload } from "../dispatcher/payloads";
import { Dispatcher } from "flux";
export declare const useDispatcher: (dispatcher: Dispatcher<ActionPayload>, handler: (payload: ActionPayload) => void) => void;
