import { isType } from "../is-type/index.js";
export const isDate = (value) => isType(value, "date");
