import React from 'react';
import { Room } from "matrix-js-sdk/src/models/room";
import { IDialogProps } from "./IDialogProps";
interface IProps extends IDialogProps {
    room: Room;
}
interface IState {
    busy: boolean;
}
export default class RoomUpgradeDialog extends React.Component<IProps, IState> {
    private targetVersion;
    state: {
        busy: boolean;
    };
    componentDidMount(): Promise<void>;
    private onCancelClick;
    private onUpgradeClick;
    render(): JSX.Element;
}
export {};
