import React from "react";
import StyledRadioButton from "../../components/views/elements/StyledRadioButton";
interface IProps extends React.ComponentProps<typeof StyledRadioButton> {
    label?: string;
    onChange(): any;
    onClose(): void;
}
export declare const StyledMenuItemRadio: React.FC<IProps>;
export {};
