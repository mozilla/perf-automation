import { MatrixEvent } from "matrix-js-sdk/src/models/event";
import { TagID } from "../models";
export declare function isSelf(event: MatrixEvent): boolean;
export declare function isSelfTarget(event: MatrixEvent): boolean;
export declare function shouldPrefixMessagesIn(roomId: string, tagId: TagID): boolean;
export declare function getSenderName(event: MatrixEvent): string;
export declare function getTargetName(event: MatrixEvent): string;
