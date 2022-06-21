import { isType } from "../is-type/index.js";

export const isObject = (value: unknown): boolean => isType(value, "object");
