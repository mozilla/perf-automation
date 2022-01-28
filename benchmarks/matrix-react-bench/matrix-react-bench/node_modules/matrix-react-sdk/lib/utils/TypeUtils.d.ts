/**
 * Creates a class of a given type using the objects defined. This
 * is a stopgap function while we don't have TypeScript interfaces.
 * In future, we'd define the `type` as an interface and just cast
 * it instead of cheating like we are here.
 * @param {Type} Type The type of class to construct.
 * @param {*} opts The options (properties) to set on the object.
 * @returns {*} The created object.
 */
export declare function makeType(Type: any, opts: any): any;
