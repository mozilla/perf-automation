import { HTMLAttributes } from "react";
import { Room } from "matrix-js-sdk/src/models/room";
interface IProps extends HTMLAttributes<HTMLSpanElement> {
    room: Room;
    onlyKnownUsers?: boolean;
    numShown?: number;
}
declare const FacePile: ({ room, onlyKnownUsers, numShown, ...props }: IProps) => JSX.Element;
export default FacePile;
