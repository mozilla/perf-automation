import { EventEmitter } from "events";
import { MatrixEvent } from "matrix-js-sdk/src/models/event";

const ROOM_VERSION = 6;

let accountSettings = new MatrixEvent({
    type: "im.vector.web.settings",
    content: {},
});

export default class FakeMatrixClient extends EventEmitter {
    rooms = null;
    unstableClientRelationAggregation = true;

    constructor() {
        super();
        this.setMaxListeners(500);
    }

    isGuest() { return false; }
    isUserIgnored() { return false; }
    getUserId() { return "@user:example.org"; }
    getSyncState() { return null; }
    credentials() { return { userId: this.getUserId() }; }
    decryptEventIfNeeded() { return Promise.resolve(); }
    getPushActionsForEvent() { return { notify: false, tweaks: {} }; }
    isRoomEncrypted() { return false; }
    getRoom(roomid) {
        if (this.rooms && roomid in this.rooms) {
            return this.rooms[roomid];
        }
        return null;
    }
    getCapabilities() {
        return Promise.resolve({
            ["m.room_versions"]: {
                default: ROOM_VERSION,
                [ROOM_VERSION]: "stable",
            },
        });
    }
    hasLazyLoadMembersEnabled() { return false; }
    isInitialSyncComplete() { return true; }
    getAccountData(type) {
        if (type === "im.vector.web.settings") {
            return accountSettings;
        }
    }
    getSyncStateData() { return null; }
    get sessionStore() {
        return { store: globalThis.sessionStorage };
    }
    get pushRules() {
        return { global: {} };
    }
    getRoomPushRule() {
        return Promise.resolve(this.pushRules);
    }
    getClientWellKnown() {
        return {};
    }
    async setRoomReadMarkers() { }
    getPublicisedGroups() { return Promise.resolve({ users: {} }); }
    stopPeeking() { }
    isCryptoEnabled() { return false; }
    sendTyping() { return Promise.resolve(); }
}
