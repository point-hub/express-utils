import { objKeys } from "../../object/keys/index.js";
import { isType } from "../../type/is-type/index.js";
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
const isEmpty = (value) => {
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
