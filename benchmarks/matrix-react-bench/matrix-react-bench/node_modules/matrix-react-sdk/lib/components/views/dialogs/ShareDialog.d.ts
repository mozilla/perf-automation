import * as React from 'react';
import * as PropTypes from 'prop-types';
import { Room } from "matrix-js-sdk/src/models/room";
import { User } from "matrix-js-sdk/src/models/user";
import { Group } from "matrix-js-sdk/src/models/group";
import { RoomMember } from "matrix-js-sdk/src/models/room-member";
import { MatrixEvent } from "matrix-js-sdk/src/models/event";
import { RoomPermalinkCreator } from "../../../utils/permalinks/Permalinks";
import { IDialogProps } from "./IDialogProps";
interface IProps extends IDialogProps {
    target: Room | User | Group | RoomMember | MatrixEvent;
    permalinkCreator: RoomPermalinkCreator;
}
interface IState {
    linkSpecificEvent: boolean;
    permalinkCreator: RoomPermalinkCreator;
}
export default class ShareDialog extends React.PureComponent<IProps, IState> {
    static propTypes: {
        onFinished: PropTypes.Validator<(...args: any[]) => any>;
        target: PropTypes.Validator<unknown>;
    };
    protected closeCopiedTooltip: () => void;
    constructor(props: any);
    static onLinkClick(e: any): void;
    onCopyClick(e: any): Promise<void>;
    onLinkSpecificEventCheckboxClick(): void;
    componentWillUnmount(): void;
    getUrl(): any;
    render(): JSX.Element;
}
export {};
