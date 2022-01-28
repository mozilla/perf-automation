import React from "react";
import { NotificationState } from "../../../stores/notifications/NotificationState";
interface IProps {
    isMinimized: boolean;
    isSelected: boolean;
    displayName: string;
    avatar: React.ReactElement;
    notificationState?: NotificationState;
    onClick: () => void;
}
interface IState {
    hover: boolean;
}
export default class ExtraTile extends React.Component<IProps, IState> {
    constructor(props: IProps);
    private onTileMouseEnter;
    private onTileMouseLeave;
    render(): React.ReactElement;
}
export {};
