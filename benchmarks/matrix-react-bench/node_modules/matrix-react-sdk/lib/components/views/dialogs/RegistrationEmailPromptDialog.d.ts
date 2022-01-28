import * as React from "react";
import { IDialogProps } from "./IDialogProps";
interface IProps extends IDialogProps {
    onFinished(continued: boolean, email?: string): void;
}
declare const RegistrationEmailPromptDialog: React.FC<IProps>;
export default RegistrationEmailPromptDialog;
