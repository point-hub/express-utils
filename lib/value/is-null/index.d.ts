/**
 * Returns true if the value is null
 *
 * @example
 * isNull(null)       //=> true
 * isNull(undefined)  //=> false
 * isNull('')         //=> false
 * isNull([])         //=> false
 * isNull({})         //=> false
 */
declare const isNull: (value: unknown) => boolean;
export { isNull };
