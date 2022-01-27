import React from 'react';
import { Layout } from "../../../settings/enums/Layout";
interface IProps {
    /**
     * The text to be displayed in the message preview
     */
    message: string;
    /**
     * Whether to use the irc layout or not
     */
    layout: Layout;
    /**
     * classnames to apply to the wrapper of the preview
     */
    className: string;
    /**
     * The ID of the displayed user
     */
    userId?: string;
    /**
     * The display name of the displayed user
     */
    displayName?: string;
    /**
     * The mxc:// avatar URL of the displayed user
     */
    avatarUrl?: string;
}
interface IState {
    message: string;
}
export default class EventTilePreview extends React.Component<IProps, IState> {
    constructor(props: IProps);
    private fakeEvent;
    render(): JSX.Element;
}
export {};
