/// <reference types="react" />
import { Room } from "matrix-js-sdk/src/models/room";
interface IProps {
    space: Room;
    onFinished?(): void;
}
declare const SpacePublicShare: ({ space, onFinished }: IProps) => JSX.Element;
export default SpacePublicShare;
