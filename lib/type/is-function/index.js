import { isType } from "../is-type";
export const isFunction = (value) => isType(value, "function");
