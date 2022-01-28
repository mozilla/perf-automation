import React from 'react';
interface IProps {
    onCancelClick: () => void;
    onSearch: (query: string, scope: string) => void;
    searchInProgress?: boolean;
    isRoomEncrypted?: boolean;
}
interface IState {
    scope: SearchScope;
}
export declare enum SearchScope {
    Room = "Room",
    All = "All"
}
export default class SearchBar extends React.Component<IProps, IState> {
    private searchTerm;
    constructor(props: IProps);
    private onThisRoomClick;
    private onAllRoomsClick;
    private onSearchChange;
    private searchIfQuery;
    private onSearch;
    render(): JSX.Element;
}
export {};
