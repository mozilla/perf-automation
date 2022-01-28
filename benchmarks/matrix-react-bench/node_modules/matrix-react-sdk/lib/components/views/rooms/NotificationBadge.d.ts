import React from "react";
import { XOR } from "../../../@types/common";
import { NotificationState } from "../../../stores/notifications/NotificationState";
interface IProps {
    notification: NotificationState;
    /**
     * If true, the badge will show a count if at all possible. This is typically
     * used to override the user's preference for things like room sublists.
     */
    forceCount?: boolean;
    /**
     * The room ID, if any, the badge represents.
     */
    roomId?: string;
}
interface IClickableProps extends IProps, React.InputHTMLAttributes<Element> {
    showUnsentTooltip?: boolean;
    /**
     * If specified will return an AccessibleButton instead of a div.
     */
    onClick?(ev: React.MouseEvent): any;
}
interface IState {
    showCounts: boolean;
    showTooltip: boolean;
}
export default class NotificationBadge extends React.PureComponent<XOR<IProps, IClickableProps>, IState> {
    private countWatcherRef;
    constructor(props: IProps);
    private get roomId();
    componentWillUnmount(): void;
    componentDidUpdate(prevProps: Readonly<IProps>): void;
    private countPreferenceChanged;
    private onNotificationUpdate;
    private onMouseOver;
    private onMouseLeave;
    render(): React.ReactElement;
}
export {};
