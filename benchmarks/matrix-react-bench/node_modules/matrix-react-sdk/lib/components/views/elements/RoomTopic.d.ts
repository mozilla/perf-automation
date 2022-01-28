/// <reference types="react" />
import { Room } from "matrix-js-sdk/src/models/room";
interface IProps {
    room?: Room;
    children?(topic: string, ref: (element: HTMLElement) => void): JSX.Element;
}
export declare const getTopic: (room: any) => any;
declare const RoomTopic: ({ room, children }: IProps) => JSX.Element;
export default RoomTopic;
