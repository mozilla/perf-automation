import Range from "./range";
import EditorModel from "./model";
import DocumentPosition, { IPosition } from "./position";
export declare type Caret = Range | DocumentPosition;
export declare function setSelection(editor: HTMLDivElement, model: EditorModel, selection: Range | IPosition): void;
export declare function setCaretPosition(editor: HTMLDivElement, model: EditorModel, caretPosition: IPosition): void;
export declare function getLineAndNodePosition(model: EditorModel, caretPosition: IPosition): {
    lineIndex: number;
    nodeIndex: number;
    offset: number;
};
