/// <reference types="react" />
export declare enum WarningKind {
    Files = 0,
    Search = 1
}
interface IProps {
    isRoomEncrypted: boolean;
    kind: WarningKind;
}
export default function DesktopBuildsNotice({ isRoomEncrypted, kind }: IProps): JSX.Element;
export {};
