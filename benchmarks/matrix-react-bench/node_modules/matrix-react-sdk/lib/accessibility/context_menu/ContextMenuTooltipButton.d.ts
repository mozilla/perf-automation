import React from "react";
import AccessibleTooltipButton from "../../components/views/elements/AccessibleTooltipButton";
interface IProps extends React.ComponentProps<typeof AccessibleTooltipButton> {
    isExpanded: boolean;
}
export declare const ContextMenuTooltipButton: React.FC<IProps>;
export {};
