import React from 'react';
import { Room } from "matrix-js-sdk/src/models/room";
import AutocompleteProvider from './AutocompleteProvider';
import { ICompletion, ISelectionRange } from "./Autocompleter";
import { TimelineRenderingType } from '../contexts/RoomContext';
export default class NotifProvider extends AutocompleteProvider {
    room: Room;
    constructor(room: Room, renderingType?: TimelineRenderingType);
    getCompletions(query: string, selection: ISelectionRange, force?: boolean, limit?: number): Promise<ICompletion[]>;
    getName(): string;
    renderCompletions(completions: React.ReactNode[]): React.ReactNode;
}
