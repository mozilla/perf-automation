import React from "react";
import { VerificationRequest } from "matrix-js-sdk/src/crypto/verification/request/VerificationRequest";
import { RoomMember } from "matrix-js-sdk/src/models/room-member";
import { User } from "matrix-js-sdk/src/models/user";
interface IProps {
    member: RoomMember | User;
    onClose: () => void;
    verificationRequest: VerificationRequest;
    verificationRequestPromise?: Promise<VerificationRequest>;
    layout: string;
    isRoomEncrypted: boolean;
}
declare const EncryptionPanel: React.FC<IProps>;
export default EncryptionPanel;
