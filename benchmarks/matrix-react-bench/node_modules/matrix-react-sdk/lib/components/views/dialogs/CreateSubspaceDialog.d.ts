import React from "react";
import { Room } from "matrix-js-sdk/src/models/room";
interface IProps {
    space: Room;
    onAddExistingSpaceClick(): void;
    onFinished(added?: boolean): void;
}
declare const CreateSubspaceDialog: React.FC<IProps>;
export default CreateSubspaceDialog;
