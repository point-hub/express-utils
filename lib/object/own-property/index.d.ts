/**
 * Gets a string array of the object own property
 *
 * @example
 * objOwnProperty({ x: 'x' }) //=> ['x']
 * objOwnProperty({})         //=> []
 * objOwnProperty(null)       //=> []
 * objOwnProperty(undefined)  //=> []
 * objOwnProperty('')         //=> []
 * objOwnProperty([])         //=> ['length']
 */
export declare const objOwnProperty: <T = Record<string, unknown>>(value: T) => string[];
