import * as React from 'react';
interface IProps {
    onSelectionChange: (value: number) => void;
    value: number;
    values: number[];
    displayFunc: (value: number) => string;
    disabled: boolean;
}
export default class Slider extends React.Component<IProps> {
    private offset;
    render(): React.ReactNode;
    onClick(event: React.MouseEvent): void;
}
export {};
