import React from 'react';
import { Layout } from "../../../settings/enums/Layout";
interface IProps {
}
interface IState {
    fontSize: string;
    useCustomFontSize: boolean;
    layout: Layout;
    userId?: string;
    displayName: string;
    avatarUrl: string;
}
export default class FontScalingPanel extends React.Component<IProps, IState> {
    private readonly MESSAGE_PREVIEW_TEXT;
    private unmounted;
    constructor(props: IProps);
    componentDidMount(): Promise<void>;
    componentWillUnmount(): void;
    private onFontSizeChanged;
    private onValidateFontSize;
    render(): JSX.Element;
}
export {};
