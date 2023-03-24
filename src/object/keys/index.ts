import { isNil } from "@src/index.js";

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
export const objKeys = <T = Record<string, unknown>>(value: T): string[] =>
  !isNil(value) && typeof value === "object" ? Object.keys(value as object) : [];
