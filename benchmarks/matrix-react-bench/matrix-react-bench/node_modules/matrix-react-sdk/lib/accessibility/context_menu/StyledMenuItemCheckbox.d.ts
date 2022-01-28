import React from "react";
import StyledCheckbox from "../../components/views/elements/StyledCheckbox";
interface IProps extends React.ComponentProps<typeof StyledCheckbox> {
    label?: string;
    onChange(): any;
    onClose(): void;
}
export declare const StyledMenuItemCheckbox: React.FC<IProps>;
export {};
