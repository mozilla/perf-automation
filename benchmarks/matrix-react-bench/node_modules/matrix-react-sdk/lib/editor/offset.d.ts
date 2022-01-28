import EditorModel from "./model";
import DocumentPosition from "./position";
export default class DocumentOffset {
    offset: number;
    readonly atNodeEnd: boolean;
    constructor(offset: number, atNodeEnd: boolean);
    asPosition(model: EditorModel): DocumentPosition;
    add(delta: number, atNodeEnd?: boolean): DocumentOffset;
}
