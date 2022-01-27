import React from "react";
import { IDialogProps } from "./IDialogProps";
interface IProps extends IDialogProps {
    title: string;
    subheading: string;
    rageshakeLabel: string;
    rageshakeData?: Record<string, string>;
}
declare const GenericFeatureFeedbackDialog: React.FC<IProps>;
export default GenericFeatureFeedbackDialog;
