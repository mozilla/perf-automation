import React from 'react';
interface IState {
    enabling: boolean;
    eventIndexSize: number;
    roomCount: number;
    eventIndexingEnabled: boolean;
}
export default class EventIndexPanel extends React.Component<{}, IState> {
    constructor(props: any);
    updateCurrentRoom: (room: any) => Promise<void>;
    componentWillUnmount(): void;
    componentDidMount(): void;
    updateState(): Promise<void>;
    private onManage;
    private onEnable;
    private confirmEventStoreReset;
    render(): any;
}
export {};
