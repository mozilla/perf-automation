import React from "react";
import { ImageSize } from "../../../settings/enums/ImageSize";
interface IProps {
}
interface IState {
    size: ImageSize;
}
export default class ImageSizePanel extends React.Component<IProps, IState> {
    constructor(props: IProps);
    private onSizeChange;
    render(): JSX.Element;
}
export {};
