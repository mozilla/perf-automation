import React from "react";
import { RoomMember } from "matrix-js-sdk/src/models/room-member";
import { User } from "matrix-js-sdk/src/models/user";
export declare const PendingActionSpinner: ({ text }: {
    text: any;
}) => JSX.Element;
interface IProps {
    waitingForOtherParty: boolean;
    waitingForNetwork: boolean;
    member: RoomMember | User;
    onStartVerification: () => Promise<void>;
    isRoomEncrypted: boolean;
    inDialog: boolean;
    isSelfVerification: boolean;
}
declare const EncryptionInfo: React.FC<IProps>;
export default EncryptionInfo;
