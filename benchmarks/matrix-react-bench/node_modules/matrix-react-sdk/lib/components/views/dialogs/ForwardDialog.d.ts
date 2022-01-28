import React from "react";
import { MatrixEvent } from "matrix-js-sdk/src/models/event";
import { MatrixClient } from "matrix-js-sdk/src/client";
import { IDialogProps } from "./IDialogProps";
import { RoomPermalinkCreator } from "../../../utils/permalinks/Permalinks";
interface IProps extends IDialogProps {
    matrixClient: MatrixClient;
    event: MatrixEvent;
    permalinkCreator: RoomPermalinkCreator;
}
declare const ForwardDialog: React.FC<IProps>;
export default ForwardDialog;
