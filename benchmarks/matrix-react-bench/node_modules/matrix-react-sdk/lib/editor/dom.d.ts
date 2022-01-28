import DocumentOffset from "./offset";
declare type Predicate = (node: Node) => boolean;
declare type Callback = (node: Node) => void;
export declare function walkDOMDepthFirst(rootNode: Node, enterNodeCallback: Predicate, leaveNodeCallback: Callback): void;
export declare function getCaretOffsetAndText(editor: HTMLDivElement, sel: Selection): {
    caret: DocumentOffset;
    text: string;
};
export declare function getRangeForSelection(editor: any, model: any, selection: any): any;
export {};
