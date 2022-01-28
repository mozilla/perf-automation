import React from "react";
import { Layout } from "../../../settings/enums/Layout";
interface IProps {
    userId?: string;
    displayName: string;
    avatarUrl: string;
    messagePreviewText: string;
    onLayoutChanged?: (layout: Layout) => void;
}
interface IState {
    layout: Layout;
}
export default class LayoutSwitcher extends React.Component<IProps, IState> {
    constructor(props: IProps);
    private onLayoutChange;
    render(): JSX.Element;
}
export {};
