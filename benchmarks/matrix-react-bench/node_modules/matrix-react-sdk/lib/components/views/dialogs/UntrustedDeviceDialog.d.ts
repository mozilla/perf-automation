import React from "react";
import { User } from "matrix-js-sdk/src/models/user";
import { IDialogProps } from "./IDialogProps";
import { IDevice } from "../right_panel/UserInfo";
interface IProps extends IDialogProps {
    user: User;
    device: IDevice;
}
declare const UntrustedDeviceDialog: React.FC<IProps>;
export default UntrustedDeviceDialog;
