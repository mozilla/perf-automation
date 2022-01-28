import React from 'react';
import { IEmoji } from "../../../emoji";
interface IProps {
    emoji: IEmoji;
    selectedEmojis?: Set<string>;
    onClick(emoji: IEmoji): void;
    onMouseEnter(emoji: IEmoji): void;
    onMouseLeave(emoji: IEmoji): void;
}
declare class Emoji extends React.PureComponent<IProps> {
    render(): JSX.Element;
}
export default Emoji;
