import React from 'react';
import { IDialogProps } from "../../../../components/views/dialogs/IDialogProps";
interface IProps extends IDialogProps {
}
interface IState {
    eventIndexSize: number;
    eventCount: number;
    crawlingRoomsCount: number;
    roomCount: number;
    currentRoom: string;
    crawlerSleepTime: number;
}
export default class ManageEventIndexDialog extends React.Component<IProps, IState> {
    constructor(props: any);
    updateCurrentRoom: (room: any) => Promise<void>;
    componentWillUnmount(): void;
    componentDidMount(): Promise<void>;
    private onDisable;
    private onCrawlerSleepTimeChange;
    render(): JSX.Element;
}
export {};
