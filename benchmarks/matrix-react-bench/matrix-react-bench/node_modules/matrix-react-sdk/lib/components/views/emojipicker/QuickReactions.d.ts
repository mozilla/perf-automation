import React from 'react';
import { IEmoji } from "../../../emoji";
interface IProps {
    selectedEmojis?: Set<string>;
    onClick(emoji: IEmoji): void;
}
interface IState {
    hover?: IEmoji;
}
declare class QuickReactions extends React.Component<IProps, IState> {
    constructor(props: any);
    private onMouseEnter;
    private onMouseLeave;
    render(): JSX.Element;
}
export default QuickReactions;
