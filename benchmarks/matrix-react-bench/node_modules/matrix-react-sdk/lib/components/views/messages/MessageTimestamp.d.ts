import React from 'react';
interface IProps {
    ts: number;
    showTwelveHour?: boolean;
    showFullDate?: boolean;
    showSeconds?: boolean;
    showRelative?: boolean;
}
export default class MessageTimestamp extends React.Component<IProps> {
    render(): JSX.Element;
}
export {};
