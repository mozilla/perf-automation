import React from 'react';
import { MatrixEvent } from 'matrix-js-sdk/src/models/event';
import { IPreviewUrlResponse } from 'matrix-js-sdk/src/client';
interface IProps {
    link: string;
    preview: IPreviewUrlResponse;
    mxEvent: MatrixEvent;
}
export default class LinkPreviewWidget extends React.Component<IProps> {
    private readonly description;
    private image;
    componentDidMount(): void;
    componentDidUpdate(): void;
    private onImageClick;
    render(): JSX.Element;
}
export {};
