import React from "react";
import AccessibleButton from "../../components/views/elements/AccessibleButton";
interface IProps extends React.ComponentProps<typeof AccessibleButton> {
    label?: string;
    tooltip?: string;
}
export declare const MenuItem: React.FC<IProps>;
export {};
