import React from "react";
import { Room } from "matrix-js-sdk/src/models/room";
interface IProps {
    space: Room;
    onFinished(leave: boolean, rooms?: Room[]): void;
}
declare const LeaveSpaceDialog: React.FC<IProps>;
export default LeaveSpaceDialog;
