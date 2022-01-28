export declare enum DefaultTagID {
    Invite = "im.vector.fake.invite",
    Untagged = "im.vector.fake.recent",
    Archived = "im.vector.fake.archived",
    LowPriority = "m.lowpriority",
    Favourite = "m.favourite",
    DM = "im.vector.fake.direct",
    ServerNotice = "m.server_notice",
    Suggested = "im.vector.fake.suggested"
}
export declare const OrderedDefaultTagIDs: DefaultTagID[];
export declare type TagID = string | DefaultTagID;
export declare function isCustomTag(tagId: TagID): boolean;
export declare enum RoomUpdateCause {
    Timeline = "TIMELINE",
    PossibleTagChange = "POSSIBLE_TAG_CHANGE",
    ReadReceipt = "READ_RECEIPT",
    NewRoom = "NEW_ROOM",
    RoomRemoved = "ROOM_REMOVED"
}
