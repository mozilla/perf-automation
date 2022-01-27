import React from "react";
import AccessibleButton from "../../components/views/elements/AccessibleButton";
interface IProps extends React.ComponentProps<typeof AccessibleButton> {
    label?: string;
    active: boolean;
}
export declare const MenuItemCheckbox: React.FC<IProps>;
export {};
