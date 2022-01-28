import { MatrixEvent } from "matrix-js-sdk/src/models/event";
import { SerializedPart } from "../editor/parts";
import DocumentOffset from "../editor/offset";
/**
 * Used while editing, to pass the event, and to preserve editor state
 * from one editor instance to another when remounting the editor
 * upon receiving the remote echo for an unsent event.
 */
export default class EditorStateTransfer {
    private readonly event;
    private serializedParts;
    private caret;
    constructor(event: MatrixEvent);
    setEditorState(caret: DocumentOffset, serializedParts: SerializedPart[]): void;
    hasEditorState(): boolean;
    getSerializedParts(): SerializedPart[];
    getCaret(): DocumentOffset;
    getEvent(): MatrixEvent;
}
