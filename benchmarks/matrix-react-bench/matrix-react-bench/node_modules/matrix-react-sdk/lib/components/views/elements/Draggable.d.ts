import React from 'react';
interface IProps {
    className: string;
    dragFunc: (currentLocation: ILocationState, event: MouseEvent) => ILocationState;
    onMouseUp: (event: MouseEvent) => void;
}
interface IState {
    onMouseMove: (event: MouseEvent) => void;
    onMouseUp: (event: MouseEvent) => void;
    location: ILocationState;
}
export interface ILocationState {
    currentX: number;
    currentY: number;
}
export default class Draggable extends React.Component<IProps, IState> {
    constructor(props: IProps);
    private onMouseDown;
    private onMouseUp;
    private onMouseMove;
    render(): JSX.Element;
}
export {};
