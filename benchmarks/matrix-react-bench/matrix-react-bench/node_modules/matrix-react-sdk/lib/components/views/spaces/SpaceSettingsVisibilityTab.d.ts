/// <reference types="react" />
import { Room } from "matrix-js-sdk/src/models/room";
import { MatrixClient } from "matrix-js-sdk/src/client";
interface IProps {
    matrixClient: MatrixClient;
    space: Room;
    closeSettingsFn(): void;
}
declare const SpaceSettingsVisibilityTab: ({ matrixClient: cli, space, closeSettingsFn }: IProps) => JSX.Element;
export default SpaceSettingsVisibilityTab;
