/**
implements DOM/CSS operations for resizing.
The sizer determines what CSS mechanism is used for sizing items, like flexbox, ...
*/
export default class Sizer {
    protected readonly container: HTMLElement;
    protected readonly vertical: boolean;
    protected readonly reverse: boolean;
    constructor(container: HTMLElement, vertical: boolean, reverse: boolean);
    /**
        @param {Element} item the dom element being resized
        @return {number} how far the edge of the item is from the edge of the container
    */
    getItemOffset(item: HTMLElement): number;
    /**
        @param {Element} item the dom element being resized
        @return {number} the width/height of an item in the container
    */
    getItemSize(item: HTMLElement): number;
    /** @return {number} the width/height of the container */
    getTotalSize(): number;
    /** @return {number} container offset to offsetParent */
    private getOffset;
    /** @return {number} container offset to document */
    private getPageOffset;
    getDesiredItemSize(item: HTMLElement): string;
    setItemSize(item: HTMLElement, size: string): void;
    clearItemSize(item: HTMLElement): void;
    start(item: HTMLElement): void;
    finish(item: HTMLElement): void;
    /**
        @param {MouseEvent} event the mouse event
        @return {number} the distance between the cursor and the edge of the container,
            along the applicable axis (vertical or horizontal)
    */
    offsetFromEvent(event: MouseEvent): number;
}
