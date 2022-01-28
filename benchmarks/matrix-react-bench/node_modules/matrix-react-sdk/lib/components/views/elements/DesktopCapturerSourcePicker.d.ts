import React from 'react';
export declare function getDesktopCapturerSources(): Promise<Array<DesktopCapturerSource>>;
export declare enum Tabs {
    Screens = "screen",
    Windows = "window"
}
export interface ExistingSourceIProps {
    source: DesktopCapturerSource;
    onSelect(source: DesktopCapturerSource): void;
    selected: boolean;
}
export declare class ExistingSource extends React.Component<ExistingSourceIProps> {
    constructor(props: ExistingSourceIProps);
    private onClick;
    render(): JSX.Element;
}
export interface PickerIState {
    selectedTab: Tabs;
    sources: Array<DesktopCapturerSource>;
    selectedSource: DesktopCapturerSource | null;
}
export interface PickerIProps {
    onFinished(sourceId: string): void;
}
export default class DesktopCapturerSourcePicker extends React.Component<PickerIProps, PickerIState> {
    interval: number;
    constructor(props: PickerIProps);
    componentDidMount(): Promise<void>;
    componentWillUnmount(): void;
    private onSelect;
    private onShare;
    private onTabChange;
    private onCloseClick;
    private getTab;
    render(): JSX.Element;
}
