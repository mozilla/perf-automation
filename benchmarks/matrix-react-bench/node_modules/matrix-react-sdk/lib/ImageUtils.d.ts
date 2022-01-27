/**
 * Returns the actual height that an image of dimensions (fullWidth, fullHeight)
 * will occupy if resized to fit inside a thumbnail bounding box of size
 * (thumbWidth, thumbHeight).
 *
 * If the aspect ratio of the source image is taller than the aspect ratio of
 * the thumbnail bounding box, then we return the thumbHeight parameter unchanged.
 * Otherwise we return the thumbHeight parameter scaled down appropriately to
 * reflect the actual height the scaled thumbnail occupies.
 *
 * This is very useful for calculating how much height a thumbnail will actually
 * consume in the timeline, when performing scroll offset calcuations
 * (e.g. scroll locking)
 */
export declare function thumbHeight(fullWidth: number, fullHeight: number, thumbWidth: number, thumbHeight: number): number;
