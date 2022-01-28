import { MatrixEvent } from "matrix-js-sdk/src/models/event";
import { IRoomState } from "./components/structures/RoomView";
/**
 * Determines whether the given event should be hidden from timelines.
 * @param ev The event
 * @param ctx An optional RoomContext to pull cached settings values from to avoid
 *     hitting the settings store
 */
export default function shouldHideEvent(ev: MatrixEvent, ctx?: IRoomState): boolean;
