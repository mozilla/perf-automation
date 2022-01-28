import React from "react";
import { FocusHandler, Ref } from "./types";
interface IProps {
    inputRef?: Ref;
    children(renderProps: {
        onFocus: FocusHandler;
        isActive: boolean;
        ref: Ref;
    }): any;
}
export declare const RovingTabIndexWrapper: React.FC<IProps>;
export {};
