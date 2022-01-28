import React from "react";
import { MatrixEvent } from "matrix-js-sdk/src/models/event";
interface IProps {
    links: string[];
    mxEvent: MatrixEvent;
    onCancelClick(): void;
    onHeightChanged(): void;
}
declare const LinkPreviewGroup: React.FC<IProps>;
export default LinkPreviewGroup;
