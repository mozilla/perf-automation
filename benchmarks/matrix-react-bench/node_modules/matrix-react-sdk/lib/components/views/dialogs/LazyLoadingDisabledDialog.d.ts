import React from 'react';
import { IDialogProps } from "./IDialogProps";
interface IProps extends IDialogProps {
    host: string;
}
declare const LazyLoadingDisabledDialog: React.FC<IProps>;
export default LazyLoadingDisabledDialog;
