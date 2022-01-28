import { RightPanelPhases } from "../../stores/RightPanelStorePhases";
import { SetRightPanelPhaseRefireParams } from "./SetRightPanelPhasePayload";
import { ActionPayload } from "../payloads";
import { Action } from "../actions";
import { VerificationRequest } from "matrix-js-sdk/src/crypto/verification/request/VerificationRequest";
interface AfterRightPanelPhaseChangeAction extends ActionPayload {
    action: Action.AfterRightPanelPhaseChange;
    phase: RightPanelPhases;
    verificationRequestPromise?: Promise<VerificationRequest>;
}
export declare type AfterRightPanelPhaseChangePayload = AfterRightPanelPhaseChangeAction & SetRightPanelPhaseRefireParams;
export {};
