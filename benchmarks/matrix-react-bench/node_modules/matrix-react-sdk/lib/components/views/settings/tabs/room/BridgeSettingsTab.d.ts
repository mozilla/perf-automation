import React from "react";
import { MatrixEvent } from "matrix-js-sdk/src/models/event";
interface IProps {
    roomId: string;
}
export default class BridgeSettingsTab extends React.Component<IProps> {
    private renderBridgeCard;
    static getBridgeStateEvents(roomId: string): MatrixEvent[];
    render(): JSX.Element;
}
export {};
