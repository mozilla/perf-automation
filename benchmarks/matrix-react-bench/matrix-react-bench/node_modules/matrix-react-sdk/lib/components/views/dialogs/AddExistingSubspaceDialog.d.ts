import React from "react";
import { Room } from "matrix-js-sdk/src/models/room";
interface IProps {
    space: Room;
    onCreateSubspaceClick(): void;
    onFinished(added?: boolean): void;
}
declare const AddExistingSubspaceDialog: React.FC<IProps>;
export default AddExistingSubspaceDialog;
