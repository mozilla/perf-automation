import React from "react";
import IconizedContextMenu from "./IconizedContextMenu";
import { IApp } from "../../../stores/WidgetStore";
interface IProps extends React.ComponentProps<typeof IconizedContextMenu> {
    app: IApp;
    userWidget?: boolean;
    showUnpin?: boolean;
    onDeleteClick?(): void;
    onEditClick?(): void;
}
declare const WidgetContextMenu: React.FC<IProps>;
export default WidgetContextMenu;
