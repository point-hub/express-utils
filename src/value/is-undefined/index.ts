/**
 * Returns true if the value is undefined
 *
 * @example
 * isUndefined(undefined)  //=> true
 * isUndefined(null)       //=> false
 * isUndefined('')         //=> false
 * isUndefined([])         //=> false
 * isUndefined({})         //=> false
 */
const isUndefined = (value: unknown): boolean => value === undefined;

export { isUndefined };
