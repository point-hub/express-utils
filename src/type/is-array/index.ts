import { isType } from "../is-type/index.js";

export const isArray = (value: unknown): boolean => isType(value, "array");
