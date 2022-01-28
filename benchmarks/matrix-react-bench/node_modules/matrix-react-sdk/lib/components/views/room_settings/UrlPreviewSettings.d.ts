import React from 'react';
import { Room } from "matrix-js-sdk/src/models/room";
interface IProps {
    room: Room;
}
export default class UrlPreviewSettings extends React.Component<IProps> {
    private onClickUserSettings;
    render(): JSX.Element;
}
export {};
