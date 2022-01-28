import { } from "./shell-polyfill-hack.js";
import { } from "./load-skin.js";
import DumpDOMTree from "./dump-tree.js";

import React from "react";
import ReactDOM from "react-dom";

import { MatrixClientPeg } from "matrix-react-sdk/src/MatrixClientPeg";
import { setMissingEntryGenerator } from "matrix-react-sdk/src/languageHandler";

import MatrixClientContext from "matrix-react-sdk/src/contexts/MatrixClientContext";
import RoomView from "matrix-react-sdk/src/components/structures/RoomView";
import ResizeNotifier from "matrix-react-sdk/src/utils/ResizeNotifier";
import defaultDispatcher from "matrix-react-sdk/src/dispatcher/dispatcher";
import DMRoomMap from "matrix-react-sdk/src/utils/DMRoomMap";

import FakeMatrixClient from "./FakeMatrixClient.js";
import { synthesize_room } from "./synthetic-room.js";

// Create the DOM render target and insert into document. This will be the
// ReactDOM root container node.
let target = document.createElement("div");
document.body.appendChild(target);

// We don't have translation data so override fallback hook to not show
// additional debug info for missing translations.
setMissingEntryGenerator(s => s.split("|").at(-1));

// Use a mock MatrixClient and set as the global singleton. This holds the event
// data that is rendered and lets us avoid needing a server.
let client = new FakeMatrixClient;
MatrixClientPeg.matrixClient = client;

// Global matrix-sdk initialization that must be manually run since we are not
// using the top-level entry point and instead focus on RoomView.
DMRoomMap.makeShared().start();

let room1_id = "!AAAAAAAAAAAA:example.org";
let room2_id = "!BBBBBBBBBBBB:example.org";

let rooms = {};
rooms[room1_id] = synthesize_room(room1_id);
rooms[room2_id] = synthesize_room(room2_id);

// Demo render of a room.
function render_room(room_id) {
    client.room = rooms[room_id];

    defaultDispatcher.dispatch({
        action: "view_room",
        room_id,
    }, true);

    let resizeNotifier = new ResizeNotifier;
    let forwardRef = React.createRef();
    let props = {
        mxClient: client,
        threepidInvite: null,
        resizeNotifier,
        key: room_id,
        ref: forwardRef,
    };

    let elem = React.createElement(RoomView, props, null);
    elem = React.createElement(MatrixClientContext.Provider, { value: client }, elem);

    ReactDOM.render(elem, target);
}

let old_console = console.log;
console.log = function() {};

let render_i = 0;
let render_cnt = 200;
let results = [];

function rerender() {
    if ((render_i % 50) === 0) {
        results.push([render_i, Date.now()]);
    }

    if (render_i < render_cnt) {
        render_i++
        let room_id = (render_i & 1) ? room2_id : room1_id;
        render_room(room_id);
        setTimeout(rerender, 0);
    } else {
        let timings = [];

        let [prev_i, prev_t] = results.shift();
        while (results.length > 0) {
            let [i, t] = results.shift();
            let di = (i - prev_i);
            let dt = (t - prev_t);
            let res = dt/di;
            [prev_i, prev_t] = [i, t];
            timings.push([i, res]);
            old_console("Finished", di, "iterations at", res, "ms each.");
        }

        // Send results to Raptor-Browsertime
        window.sessionStorage.setItem(
            'benchmark_results',
            JSON.stringify({"matrix-react-bench": timings})
        );
    }
}

let startTime = Date.now();
setTimeout(rerender, 0);

// In jsshell, drain the job/promise queue and render to console instead
if ("drainJobQueue" in globalThis) {
    console.log = old_console;
    render_room(room1_id);
    drainJobQueue();
    DumpDOMTree(target);
}
