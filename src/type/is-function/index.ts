import { isType } from "../is-type/index.js";

export const isFunction = (value: unknown): boolean => isType(value, "function");
