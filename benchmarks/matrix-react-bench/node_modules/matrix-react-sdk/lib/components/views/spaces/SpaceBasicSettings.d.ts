/// <reference types="react" />
interface IProps {
    avatarUrl?: string;
    avatarDisabled?: boolean;
    name?: string;
    nameDisabled?: boolean;
    topic?: string;
    topicDisabled?: boolean;
    setAvatar(avatar: File): void;
    setName(name: string): void;
    setTopic(topic: string): void;
}
export declare const SpaceAvatar: ({ avatarUrl, avatarDisabled, setAvatar, }: Pick<IProps, "avatarUrl" | "avatarDisabled" | "setAvatar">) => JSX.Element;
declare const SpaceBasicSettings: ({ avatarUrl, avatarDisabled, setAvatar, name, nameDisabled, setName, topic, topicDisabled, setTopic, }: IProps) => JSX.Element;
export default SpaceBasicSettings;
