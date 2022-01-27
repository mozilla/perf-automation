import React from "react";
import { Room } from "matrix-js-sdk/src/models/room";
import AutocompleteProvider from './AutocompleteProvider';
import QueryMatcher from './QueryMatcher';
import { ICompletion, ISelectionRange } from "./Autocompleter";
import { TimelineRenderingType } from "../contexts/RoomContext";
export default class RoomProvider extends AutocompleteProvider {
    protected matcher: QueryMatcher<Room>;
    constructor(room: Room, renderingType?: TimelineRenderingType);
    protected getRooms(): Room[];
    getCompletions(query: string, selection: ISelectionRange, force?: boolean, limit?: number): Promise<ICompletion[]>;
    getName(): string;
    renderCompletions(completions: React.ReactNode[]): React.ReactNode;
}
