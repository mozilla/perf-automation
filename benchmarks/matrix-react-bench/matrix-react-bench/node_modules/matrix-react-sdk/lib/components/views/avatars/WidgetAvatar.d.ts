import React, { ComponentProps } from 'react';
import { IApp } from "../../../stores/WidgetStore";
import { BaseAvatarType } from "./BaseAvatar";
interface IProps extends Omit<ComponentProps<BaseAvatarType>, "name" | "url" | "urls"> {
    app: IApp;
}
declare const WidgetAvatar: React.FC<IProps>;
export default WidgetAvatar;
