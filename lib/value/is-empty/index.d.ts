/**
 * Returns true if the value is empty
 *
 * @example
 * isEmpty(undefined)        //=> true
 * isEmpty(null)             //=> true
 * isEmpty('')               //=> true
 * isEmpty([])               //=> true
 * isEmpty({})               //=> true
 * isEmpty('  ')             //=> false
 * isEmpty({x: 'x'})         //=> false
 * isEmpty([25])             //=> false
 * isEmpty(0)                //=> false
 * isEmpty(true)             //=> false
 * isEmpty(false)            //=> false
 * isEmpty(() => undefined)  //=> false
 */
declare const isEmpty: (value: unknown) => boolean;
export { isEmpty };
