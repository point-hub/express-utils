import { isNil } from "../../index.js";
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
export const objKeys = (value) => !isNil(value) && typeof value === "object" ? Object.keys(value) : [];
