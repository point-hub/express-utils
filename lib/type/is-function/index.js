import { isType } from "../is-type/index.js";
export const isFunction = (value) => isType(value, "function");
