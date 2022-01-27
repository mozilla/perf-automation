import { IPreview } from "./IPreview";
import { TagID } from "../models";
import { MatrixEvent } from "matrix-js-sdk/src/models/event";
export declare class CallAnswerEventPreview implements IPreview {
    getTextFor(event: MatrixEvent, tagId?: TagID): string;
}
