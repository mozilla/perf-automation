import React from "react";
interface IProps {
    roomId: string;
    label?: string;
    canSetCanonicalAlias?: boolean;
}
interface IState {
    isRoomPublished: boolean;
}
export default class RoomPublishSetting extends React.PureComponent<IProps, IState> {
    constructor(props: any, context: any);
    private onRoomPublishChange;
    componentDidMount(): void;
    render(): JSX.Element;
}
export {};
