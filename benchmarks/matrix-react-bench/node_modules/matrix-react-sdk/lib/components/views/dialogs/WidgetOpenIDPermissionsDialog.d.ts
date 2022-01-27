import React from 'react';
import { Widget, WidgetKind } from "matrix-widget-api";
import { IDialogProps } from "./IDialogProps";
interface IProps extends IDialogProps {
    widget: Widget;
    widgetKind: WidgetKind;
    inRoomId?: string;
}
interface IState {
    rememberSelection: boolean;
}
export default class WidgetOpenIDPermissionsDialog extends React.PureComponent<IProps, IState> {
    constructor(props: IProps);
    private onAllow;
    private onDeny;
    private onPermissionSelection;
    private onRememberSelectionChange;
    render(): JSX.Element;
}
export {};
