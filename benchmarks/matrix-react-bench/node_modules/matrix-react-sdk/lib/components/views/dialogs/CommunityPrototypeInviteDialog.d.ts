import React from 'react';
import { IDialogProps } from "./IDialogProps";
import { RoomMember } from "matrix-js-sdk/src/models/room-member";
interface IProps extends IDialogProps {
    roomId: string;
    communityName: string;
}
interface IPerson {
    userId: string;
    user: RoomMember;
    lastActive: number;
}
interface IState {
    emailTargets: string[];
    userTargets: string[];
    showPeople: boolean;
    people: IPerson[];
    numPeople: number;
    busy: boolean;
}
export default class CommunityPrototypeInviteDialog extends React.PureComponent<IProps, IState> {
    constructor(props: IProps);
    private buildSuggestions;
    private onSubmit;
    private onAddressChange;
    private onAddressBlur;
    private onShowPeopleClick;
    private setPersonToggle;
    private renderPerson;
    private onShowMorePeople;
    render(): JSX.Element;
}
export {};
