/// <reference types="react" />
import { Room } from "matrix-js-sdk/src/models/room";
interface IProps {
    room: Room;
    children?(name: string): JSX.Element;
}
declare const RoomName: ({ room, children }: IProps) => JSX.Element;
export default RoomName;
