/// <reference types="react" />
import { Room } from "matrix-js-sdk/src/models/room";
import { MatrixClient } from "matrix-js-sdk/src/client";
import { IDialogProps } from "../dialogs/IDialogProps";
interface IProps extends IDialogProps {
    matrixClient: MatrixClient;
    space: Room;
}
declare const SpaceSettingsGeneralTab: ({ matrixClient: cli, space, onFinished }: IProps) => JSX.Element;
export default SpaceSettingsGeneralTab;
