import React from "react";
import AccessibleButton from "../../components/views/elements/AccessibleButton";
import { Ref } from "./types";
interface IProps extends Omit<React.ComponentProps<typeof AccessibleButton>, "onFocus" | "inputRef" | "tabIndex"> {
    inputRef?: Ref;
}
export declare const RovingAccessibleButton: React.FC<IProps>;
export {};
