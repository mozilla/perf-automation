import React from "react";
import { Room } from "matrix-js-sdk/src/models/room";
import { IDialogProps } from "./IDialogProps";
interface IProps extends IDialogProps {
    room: Room;
    selected?: string[];
}
declare const ManageRestrictedJoinRuleDialog: React.FC<IProps>;
export default ManageRestrictedJoinRuleDialog;
