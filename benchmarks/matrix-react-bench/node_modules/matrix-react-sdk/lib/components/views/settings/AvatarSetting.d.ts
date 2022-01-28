import React from "react";
interface IProps {
    avatarUrl?: string;
    avatarName: string;
    uploadAvatar?: (e: React.MouseEvent) => void;
    removeAvatar?: (e: React.MouseEvent) => void;
    avatarAltText: string;
}
declare const AvatarSetting: React.FC<IProps>;
export default AvatarSetting;
