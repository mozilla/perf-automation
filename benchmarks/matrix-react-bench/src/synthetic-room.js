import { MatrixClientPeg } from "matrix-react-sdk/src/MatrixClientPeg";
import { Room } from "matrix-js-sdk/src/models/room";
import { MatrixEvent } from "matrix-js-sdk/src/models/event";
import { EventType } from "matrix-js-sdk/src/@types/event";
import { PendingEventOrdering } from "matrix-js-sdk";
import * as ContentHelpers from 'matrix-js-sdk/src/content-helpers';

// Simple event identifiers
let event_idx = 1000;
let next_event_id = () => `\$${event_idx++}:localhost`;

let user1_id = "@user:example.org";
let user2_id = "@other:example.org";

const ROOM_VERSION = 6;

// Create a matrix-js-sdk Room object and fill with synthetic metadata and
// message events.
export function synthesize_room(room_id) {
    let event_ts = Date.now();

    let room_opts = {
        pendingEventOrdering: PendingEventOrdering.Detached,
        unstableClientRelationAggregation: true,
    };

    let client = MatrixClientPeg.get();
    let room = new Room(room_id, client, user1_id, room_opts);

    room.addLiveEvents([
        new MatrixEvent({
            event_id: next_event_id(),
            type: EventType.RoomCreate,
            content: {
                creator: user1_id,
                room_version: ROOM_VERSION,
            },
            sender: user1_id,
            room_id,
            origin_server_ts: event_ts,
            unsigned: {},
            state_key: "",
        }),
        new MatrixEvent({
            event_id: next_event_id(),
            type: EventType.RoomMember,
            content: {
                displayname: "username",
                membership: "join",
            },
            sender: user1_id,
            room_id,
            origin_server_ts: event_ts,
            unsigned: {},
            state_key: user1_id,
        }),
        new MatrixEvent({
            event_id: next_event_id(),
            type: EventType.RoomMember,
            content: {
                displayname: "other",
                membership: "join",
            },
            sender: user2_id,
            room_id,
            origin_server_ts: event_ts,
            unsigned: {},
            state_key: user2_id,
        }),
        new MatrixEvent({
            event_id: next_event_id(),
            type: EventType.RoomMessage,
            content: ContentHelpers.makeTextMessage("Welcome to the demo room!"),
            sender: user1_id,
            room_id,
            origin_server_ts: event_ts,
            unsigned: {},
        }),
        new MatrixEvent({
            event_id: next_event_id(),
            type: EventType.RoomMessage,
            content: ContentHelpers.makeTextMessage("Duh duh duh demo room!"),
            sender: user2_id,
            room_id,
            origin_server_ts: event_ts,
            unsigned: {},
        }),
        new MatrixEvent({
            event_id: next_event_id(),
            type: EventType.RoomMessage,
            content: ContentHelpers.makeTextMessage("Chatter chatter? Chatter chatter chatter."),
            sender: user2_id,
            room_id,
            origin_server_ts: event_ts,
            unsigned: {},
        }),
        new MatrixEvent({
            event_id: next_event_id(),
            type: EventType.RoomMessage,
            content: ContentHelpers.makeHtmlMessage(
                "I see you'll fit right in, other",
                `I see you'll fit right in, <a href="https://matrix.to/#/${user2_id}">other</a>`),
            sender: user1_id,
            room_id,
            origin_server_ts: event_ts,
            unsigned: {},
        }),
    ]);

    room.updateMyMembership("join");

    return room;
}
