import React from 'react';
import ResizeNotifier from "../../utils/ResizeNotifier";
interface IProps {
    resizeNotifier: ResizeNotifier;
    collapsedRhs?: boolean;
    panel?: JSX.Element;
}
export default class MainSplit extends React.Component<IProps> {
    private onResizeStart;
    private onResize;
    private onResizeStop;
    private loadSidePanelSize;
    render(): JSX.Element;
}
export {};
