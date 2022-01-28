import React, { RefObject } from 'react';
import { DATA_BY_CATEGORY, IEmoji } from "../../../emoji";
export declare type CategoryKey = (keyof typeof DATA_BY_CATEGORY) | "recent";
export interface ICategory {
    id: CategoryKey;
    name: string;
    enabled: boolean;
    visible: boolean;
    ref: RefObject<HTMLButtonElement>;
}
interface IProps {
    id: string;
    name: string;
    emojis: IEmoji[];
    selectedEmojis: Set<string>;
    heightBefore: number;
    viewportHeight: number;
    scrollTop: number;
    onClick(emoji: IEmoji): void;
    onMouseEnter(emoji: IEmoji): void;
    onMouseLeave(emoji: IEmoji): void;
}
declare class Category extends React.PureComponent<IProps> {
    private renderEmojiRow;
    render(): JSX.Element;
}
export default Category;
