import { isType } from "../is-type/index.js";
export const isObject = (value) => isType(value, "object");
