import { isType } from "../is-type/index.js";

export const isBoolean = (value: unknown): boolean => isType(value, "boolean");
