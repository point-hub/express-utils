import { isType } from "../is-type/index.js";

export const isDate = (value: unknown): boolean => isType(value, "date");
