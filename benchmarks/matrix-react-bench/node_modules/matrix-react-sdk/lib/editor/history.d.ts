import EditorModel from "./model";
import { IDiff } from "./diff";
import { SerializedPart } from "./parts";
import { Caret } from "./caret";
interface IHistory {
    parts: SerializedPart[];
    caret: Caret;
}
export declare const MAX_STEP_LENGTH = 10;
export default class HistoryManager {
    private stack;
    private newlyTypedCharCount;
    private currentIndex;
    private changedSinceLastPush;
    private lastCaret;
    private nonWordBoundarySinceLastPush;
    private addedSinceLastPush;
    private removedSinceLastPush;
    clear(): void;
    private shouldPush;
    private pushState;
    tryPush(model: EditorModel, caret: Caret, inputType: string, diff: IDiff): boolean;
    ensureLastChangesPushed(model: EditorModel): void;
    canUndo(): boolean;
    canRedo(): boolean;
    undo(model: EditorModel): IHistory;
    redo(): IHistory;
}
export {};
