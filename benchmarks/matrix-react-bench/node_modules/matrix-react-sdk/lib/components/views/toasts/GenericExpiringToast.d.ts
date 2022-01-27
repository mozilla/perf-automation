import React from "react";
import { IProps as IGenericToastProps } from "./GenericToast";
interface IProps extends IGenericToastProps {
    toastKey: string;
    numSeconds: number;
    dismissLabel: string;
    onDismiss?(): any;
}
declare const GenericExpiringToast: React.FC<IProps>;
export default GenericExpiringToast;
