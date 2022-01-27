/// <reference types="react" />
import { Room } from "matrix-js-sdk/src/models/room";
interface IProps {
    space: Room;
    spaceChildren: Room[];
    selected: Set<Room>;
    noneLabel?: string;
    allLabel: string;
    specificLabel: string;
    onChange(rooms: Room[]): void;
}
declare const SpaceChildrenPicker: ({ space, spaceChildren, selected, onChange, noneLabel, allLabel, specificLabel, }: IProps) => JSX.Element;
export default SpaceChildrenPicker;
