import React, { ComponentProps, RefObject, SyntheticEvent } from "react";
import { ICreateRoomOpts } from "matrix-js-sdk/src/@types/requests";
import { IOpts as ICreateOpts } from "../../../createRoom";
import SpaceBasicSettings from "./SpaceBasicSettings";
import Field from "../elements/Field";
import RoomAliasField from "../elements/RoomAliasField";
export declare const createSpace: (name: string, isPublic: boolean, alias?: string, topic?: string, avatar?: string | File, createOpts?: Partial<ICreateRoomOpts>, otherOpts?: Partial<Omit<ICreateOpts, "createOpts">>) => Promise<string>;
export declare const SpaceFeedbackPrompt: ({ onClick }: {
    onClick?: () => void;
}) => JSX.Element;
declare type BProps = Omit<ComponentProps<typeof SpaceBasicSettings>, "nameDisabled" | "topicDisabled" | "avatarDisabled">;
interface ISpaceCreateFormProps extends BProps {
    busy: boolean;
    alias: string;
    nameFieldRef: RefObject<Field>;
    aliasFieldRef: RefObject<RoomAliasField>;
    showAliasField?: boolean;
    onSubmit(e: SyntheticEvent): void;
    setAlias(alias: string): void;
}
export declare const SpaceCreateForm: React.FC<ISpaceCreateFormProps>;
declare const SpaceCreateMenu: ({ onFinished }: {
    onFinished: any;
}) => JSX.Element;
export default SpaceCreateMenu;
