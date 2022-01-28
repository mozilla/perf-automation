import React from 'react';
interface IProps {
    onScrollUpClick?: (e: React.MouseEvent) => void;
    onCloseClick?: (e: React.MouseEvent) => void;
}
export default class TopUnreadMessagesBar extends React.PureComponent<IProps> {
    render(): JSX.Element;
}
export {};
