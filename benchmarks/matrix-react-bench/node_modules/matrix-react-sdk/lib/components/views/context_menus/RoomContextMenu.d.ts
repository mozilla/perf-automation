/// <reference types="react" />
import { Room } from "matrix-js-sdk/src/models/room";
import { IProps as IContextMenuProps } from "../../structures/ContextMenu";
interface IProps extends IContextMenuProps {
    room: Room;
}
declare const RoomContextMenu: ({ room, onFinished, ...props }: IProps) => JSX.Element;
export default RoomContextMenu;
