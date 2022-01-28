import React from "react";
import { IDialogProps } from "./IDialogProps";
interface IProps extends IDialogProps {
    featureId: string;
}
declare const BetaFeedbackDialog: React.FC<IProps>;
export default BetaFeedbackDialog;
