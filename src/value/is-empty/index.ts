import { objKeys } from "@src/object/keys/index.js";
import { isType } from "@src/type/is-type/index.js";

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
const isEmpty = (value: unknown): boolean => {
  if (isType(value, "date") || isType(value, "boolean") || isType(value, "number") || isType(value, "function")) {
    return false;
  }

  if (typeof value === "string" || Array.isArray(value)) {
    return value.length === 0;
  }

  if (typeof value === "object") {
    return objKeys(value).length === 0;
  }

  return true;
};

export { isEmpty };
