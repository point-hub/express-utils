/**
 * Returns true if the value is null or undefined
 *
 * @example
 * isNil(null)       //=> true
 * isNil(undefined)  //=> true
 * isNil('')         //=> false
 * isNil([])         //=> false
 * isNil({})         //=> false
 */
const isNil = (value) => value === undefined || value === null;
export { isNil };
