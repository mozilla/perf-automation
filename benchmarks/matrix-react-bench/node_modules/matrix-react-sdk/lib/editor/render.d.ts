import { Part } from "./parts";
import EditorModel from "./model";
export declare function needsCaretNodeBefore(part: Part, prevPart: Part): boolean;
export declare function needsCaretNodeAfter(part: Part, isLastOfLine: boolean): boolean;
export declare const CARET_NODE_CHAR = "\uFEFF";
export declare function isCaretNode(node: HTMLElement): boolean;
export declare function renderModel(editor: HTMLDivElement, model: EditorModel): void;
