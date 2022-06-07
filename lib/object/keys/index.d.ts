/**
 * Gets a string array of the object's own keys
 *
 * @example
 * objKeys({ x: 'x' }) //=> ['x']
 * objKeys({})         //=> []
 * objKeys(null)       //=> []
 * objKeys(undefined)  //=> []
 * objKeys('')         //=> []
 * objKeys([])         //=> []
 */
export declare const objKeys: <T = Record<string, unknown>>(value: T) => string[];
