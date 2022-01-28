import React from "react";
import AccessibleTooltipButton from "../../components/views/elements/AccessibleTooltipButton";
import { Ref } from "./types";
declare type ATBProps = React.ComponentProps<typeof AccessibleTooltipButton>;
interface IProps extends Omit<ATBProps, "onFocus" | "inputRef" | "tabIndex"> {
    inputRef?: Ref;
}
export declare const RovingAccessibleTooltipButton: React.FC<IProps>;
export {};
