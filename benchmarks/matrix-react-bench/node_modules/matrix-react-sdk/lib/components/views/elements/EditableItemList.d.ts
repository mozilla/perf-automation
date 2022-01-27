import React from "react";
interface IItemProps {
    index?: number;
    value?: string;
    onRemove?(index: number): void;
}
interface IItemState {
    verifyRemove: boolean;
}
export declare class EditableItem extends React.Component<IItemProps, IItemState> {
    state: {
        verifyRemove: boolean;
    };
    private onRemove;
    private onDontRemove;
    private onActuallyRemove;
    render(): JSX.Element;
}
interface IProps {
    id: string;
    items: string[];
    itemsLabel?: string;
    noItemsLabel?: string;
    placeholder?: string;
    newItem?: string;
    canEdit?: boolean;
    canRemove?: boolean;
    suggestionsListId?: string;
    onItemAdded?(item: string): void;
    onItemRemoved?(index: number): void;
    onNewItemChanged?(item: string): void;
}
export default class EditableItemList<P = {}> extends React.PureComponent<IProps & P> {
    protected onItemAdded: (e: any) => void;
    protected onItemRemoved: (index: any) => void;
    protected onNewItemChanged: (e: any) => void;
    protected renderNewItemField(): JSX.Element;
    render(): JSX.Element;
}
export {};
