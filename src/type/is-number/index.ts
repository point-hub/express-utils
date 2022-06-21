import { isType } from "../is-type/index.js";

export const isNumber = (value: unknown): boolean => isType(value, "number");
