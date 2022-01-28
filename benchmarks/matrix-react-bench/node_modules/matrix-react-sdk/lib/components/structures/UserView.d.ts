import React from "react";
import { RoomMember } from "matrix-js-sdk/src/models/room-member";
import ResizeNotifier from "../../utils/ResizeNotifier";
interface IProps {
    userId?: string;
    resizeNotifier: ResizeNotifier;
}
interface IState {
    loading: boolean;
    member?: RoomMember;
}
export default class UserView extends React.Component<IProps, IState> {
    constructor(props: IProps);
    componentDidMount(): void;
    componentDidUpdate(prevProps: IProps): void;
    private loadProfileInfo;
    render(): JSX.Element;
}
export {};
