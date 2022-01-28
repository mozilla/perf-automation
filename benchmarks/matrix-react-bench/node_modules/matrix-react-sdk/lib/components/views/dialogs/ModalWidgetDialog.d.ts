import * as React from 'react';
import { ClientWidgetApi, IModalWidgetOpenRequestData, IModalWidgetReturnData, ModalButtonID } from "matrix-widget-api";
interface IProps {
    widgetDefinition: IModalWidgetOpenRequestData;
    widgetRoomId?: string;
    sourceWidgetId: string;
    onFinished(success: boolean, data?: IModalWidgetReturnData): void;
}
interface IState {
    messaging?: ClientWidgetApi;
    disabledButtonIds: ModalButtonID[];
}
export default class ModalWidgetDialog extends React.PureComponent<IProps, IState> {
    private readonly widget;
    private readonly possibleButtons;
    private appFrame;
    state: IState;
    constructor(props: any);
    componentDidMount(): void;
    componentWillUnmount(): void;
    private onReady;
    private onLoad;
    private onWidgetClose;
    private onButtonEnableToggle;
    render(): JSX.Element;
}
export {};
