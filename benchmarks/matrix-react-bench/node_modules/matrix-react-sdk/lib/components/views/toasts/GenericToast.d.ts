import React, { ReactNode } from "react";
import { XOR } from "../../../@types/common";
export interface IProps {
    description: ReactNode;
    detail?: ReactNode;
    acceptLabel: string;
    onAccept(): any;
}
interface IPropsExtended extends IProps {
    rejectLabel: string;
    onReject(): any;
}
declare const GenericToast: React.FC<XOR<IPropsExtended, IProps>>;
export default GenericToast;
