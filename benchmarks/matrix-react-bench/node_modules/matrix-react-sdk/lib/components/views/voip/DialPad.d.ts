import * as React from "react";
import { ButtonEvent } from "../elements/AccessibleButton";
interface IProps {
    onDigitPress: (digit: string, ev: ButtonEvent) => void;
    hasDial: boolean;
    onDeletePress?: (ev: ButtonEvent) => void;
    onDialPress?: () => void;
}
export default class Dialpad extends React.PureComponent<IProps> {
    render(): JSX.Element;
}
export {};
