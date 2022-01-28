import React from "react";
import AccessibleButton from "../../components/views/elements/AccessibleButton";
interface IProps extends React.ComponentProps<typeof AccessibleButton> {
    label?: string;
    isExpanded: boolean;
}
export declare const ContextMenuButton: React.FC<IProps>;
export {};
