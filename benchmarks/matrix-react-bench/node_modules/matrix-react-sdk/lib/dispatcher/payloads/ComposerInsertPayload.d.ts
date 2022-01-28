import { MatrixEvent } from "matrix-js-sdk/src/models/event";
import { ActionPayload } from "../payloads";
import { Action } from "../actions";
import { TimelineRenderingType } from "../../contexts/RoomContext";
export declare enum ComposerType {
    Send = "send",
    Edit = "edit"
}
interface IBaseComposerInsertPayload extends ActionPayload {
    action: Action.ComposerInsert;
    timelineRenderingType: TimelineRenderingType;
    composerType?: ComposerType;
}
interface IComposerInsertMentionPayload extends IBaseComposerInsertPayload {
    userId: string;
}
interface IComposerInsertQuotePayload extends IBaseComposerInsertPayload {
    event: MatrixEvent;
}
interface IComposerInsertPlaintextPayload extends IBaseComposerInsertPayload {
    text: string;
}
export declare type ComposerInsertPayload = IComposerInsertMentionPayload | IComposerInsertQuotePayload | IComposerInsertPlaintextPayload;
export {};
