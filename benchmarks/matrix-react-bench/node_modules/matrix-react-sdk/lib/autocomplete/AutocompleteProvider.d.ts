import React from 'react';
import { TimelineRenderingType } from '../contexts/RoomContext';
import type { ICompletion, ISelectionRange } from './Autocompleter';
export interface ICommand {
    command: string | null;
    range: {
        start: number;
        end: number;
    };
}
export interface IAutocompleteOptions {
    commandRegex?: RegExp;
    forcedCommandRegex?: RegExp;
    renderingType?: TimelineRenderingType;
}
export default abstract class AutocompleteProvider {
    commandRegex: RegExp;
    forcedCommandRegex: RegExp;
    protected renderingType: TimelineRenderingType;
    protected constructor({ commandRegex, forcedCommandRegex, renderingType }: IAutocompleteOptions);
    destroy(): void;
    /**
     * Of the matched commands in the query, returns the first that contains or is contained by the selection, or null.
     * @param {string} query The query string
     * @param {ISelectionRange} selection Selection to search
     * @param {boolean} force True if the user is forcing completion
     * @return {object} { command, range } where both objects fields are null if no match
     */
    getCurrentCommand(query: string, selection: ISelectionRange, force?: boolean): {
        command: any;
        range: {
            start: any;
            end: any;
        };
    };
    abstract getCompletions(query: string, selection: ISelectionRange, force: boolean, limit: number): Promise<ICompletion[]>;
    abstract getName(): string;
    abstract renderCompletions(completions: React.ReactNode[]): React.ReactNode | null;
    shouldForceComplete(): boolean;
}
