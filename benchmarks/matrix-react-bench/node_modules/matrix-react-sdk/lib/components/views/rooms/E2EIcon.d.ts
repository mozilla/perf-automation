import React from "react";
import { E2EStatus } from "../../../utils/ShieldUtils";
export declare enum E2EState {
    Verified = "verified",
    Warning = "warning",
    Unknown = "unknown",
    Normal = "normal",
    Unauthenticated = "unauthenticated"
}
interface IProps {
    isUser?: boolean;
    status?: E2EState | E2EStatus;
    className?: string;
    size?: number;
    onClick?: () => void;
    hideTooltip?: boolean;
    bordered?: boolean;
}
declare const E2EIcon: React.FC<IProps>;
export default E2EIcon;
