import { isNil } from "../../index.js";
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
export const objOwnProperty = (value) => !isNil(value) && typeof value === "object" ? Object.getOwnPropertyNames(value) : [];
