import React from 'react';
import { IEmoji } from "../../../emoji";
interface IProps {
    emoji: IEmoji;
}
declare class Preview extends React.PureComponent<IProps> {
    render(): JSX.Element;
}
export default Preview;
