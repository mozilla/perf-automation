import * as React from 'react';
/**
 * Replaces a component with a skinned version if a skinned version exists.
 * This decorator should only be applied to components which can be skinned. For
 * the react-sdk this means all components should be decorated with this.
 *
 * The decoration works by assuming the skin has been loaded prior to the
 * decorator being called. If that's not the case, the developer will find
 * out quickly through various amounts of errors and explosions.
 *
 * For a bit more detail on how this works, see docs/skinning.md
 * @param {string} name The dot-path name of the component being replaced.
 * @param {React.Component} origComponent The component that can be replaced
 * with a skinned version. If no skinned version is available, this component
 * will be used. Note that this is automatically provided to the function and
 * thus is optional for purposes of types.
 * @returns {ClassDecorator} The decorator.
 */
export declare function replaceableComponent(name: string, origComponent?: React.Component): ClassDecorator;
