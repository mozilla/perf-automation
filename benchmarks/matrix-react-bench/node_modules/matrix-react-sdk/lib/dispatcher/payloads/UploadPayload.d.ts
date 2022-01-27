import { ActionPayload } from "../payloads";
import { Action } from "../actions";
import { IUpload } from "../../models/IUpload";
interface UploadPayload extends ActionPayload {
    /**
     * The upload with fields representing the new upload state.
     */
    upload: IUpload;
}
export interface UploadStartedPayload extends UploadPayload {
    action: Action.UploadStarted;
}
export interface UploadProgressPayload extends UploadPayload {
    action: Action.UploadProgress;
}
export interface UploadErrorPayload extends UploadPayload {
    action: Action.UploadFailed;
    /**
     * An error to describe what went wrong with the upload.
     */
    error: Error;
}
export interface UploadFinishedPayload extends UploadPayload {
    action: Action.UploadFinished;
}
export interface UploadCanceledPayload extends UploadPayload {
    action: Action.UploadCanceled;
}
export {};
