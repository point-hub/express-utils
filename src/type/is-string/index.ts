import { isType } from "../is-type/index.js";

export const isString = (value: unknown): boolean => isType(value, "string");
