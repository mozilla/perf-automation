import React from "react";
import { IProps as IContextMenuProps, MenuItem, MenuItemCheckbox, MenuItemRadio } from "../../structures/ContextMenu";
interface IProps extends IContextMenuProps {
    className?: string;
    compact?: boolean;
}
interface IOptionListProps {
    first?: boolean;
    red?: boolean;
    className?: string;
}
interface IOptionProps extends React.ComponentProps<typeof MenuItem> {
    iconClassName?: string;
}
interface ICheckboxProps extends React.ComponentProps<typeof MenuItemCheckbox> {
    iconClassName: string;
}
interface IRadioProps extends React.ComponentProps<typeof MenuItemRadio> {
    iconClassName: string;
}
export declare const IconizedContextMenuRadio: React.FC<IRadioProps>;
export declare const IconizedContextMenuCheckbox: React.FC<ICheckboxProps>;
export declare const IconizedContextMenuOption: React.FC<IOptionProps>;
export declare const IconizedContextMenuOptionList: React.FC<IOptionListProps>;
declare const IconizedContextMenu: React.FC<IProps>;
export default IconizedContextMenu;
