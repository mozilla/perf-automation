import React from "react";
import { Room } from "matrix-js-sdk/src/models/room";
interface IProps {
    room: Room;
    widgetId: string;
    onClose(): void;
}
declare const WidgetCard: React.FC<IProps>;
export default WidgetCard;
