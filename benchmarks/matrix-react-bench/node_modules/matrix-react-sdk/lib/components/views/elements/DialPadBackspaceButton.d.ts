import * as React from "react";
import { ButtonEvent } from "./AccessibleButton";
interface IProps {
    onBackspacePress: (ev: ButtonEvent) => void;
}
export default class DialPadBackspaceButton extends React.PureComponent<IProps> {
    render(): JSX.Element;
}
export {};
