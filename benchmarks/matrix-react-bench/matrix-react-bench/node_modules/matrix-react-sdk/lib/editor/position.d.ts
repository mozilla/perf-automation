import DocumentOffset from "./offset";
import EditorModel from "./model";
import { Part } from "./parts";
export interface IPosition {
    index: number;
    offset: number;
}
declare type Callback = (part: Part, startIdx: number, endIdx: number) => void;
export declare type Predicate = (index: number, offset: number, part: Part) => boolean;
export default class DocumentPosition implements IPosition {
    readonly index: number;
    readonly offset: number;
    constructor(index: number, offset: number);
    compare(otherPos: DocumentPosition): number;
    iteratePartsBetween(other: DocumentPosition, model: EditorModel, callback: Callback): void;
    forwardsWhile(model: EditorModel, predicate: Predicate): DocumentPosition;
    backwardsWhile(model: EditorModel, predicate: Predicate): DocumentPosition;
    asOffset(model: EditorModel): DocumentOffset;
    isAtEnd(model: EditorModel): boolean;
    isAtStart(): boolean;
}
export {};
