import { MatrixEvent } from "matrix-js-sdk/src/models/event";
import { SerializedPart } from "./editor/parts";
import EditorModel from "./editor/model";
interface IHistoryItem {
    parts: SerializedPart[];
    replyEventId?: string;
}
export default class SendHistoryManager {
    history: Array<IHistoryItem>;
    prefix: string;
    lastIndex: number;
    currentIndex: number;
    constructor(roomId: string, prefix: string);
    static createItem(model: EditorModel, replyEvent?: MatrixEvent): IHistoryItem;
    save(editorModel: EditorModel, replyEvent?: MatrixEvent): void;
    getItem(offset: number): IHistoryItem;
}
export {};
