import React from 'react';
import { Room } from "matrix-js-sdk/src/models/room";
import { MatrixClient } from "matrix-js-sdk/src/client";
import { IDialogProps } from "./IDialogProps";
export declare enum SpaceSettingsTab {
    General = "SPACE_GENERAL_TAB",
    Visibility = "SPACE_VISIBILITY_TAB",
    Roles = "SPACE_ROLES_TAB",
    Advanced = "SPACE_ADVANCED_TAB"
}
interface IProps extends IDialogProps {
    matrixClient: MatrixClient;
    space: Room;
}
declare const SpaceSettingsDialog: React.FC<IProps>;
export default SpaceSettingsDialog;
