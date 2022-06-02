import { isType } from "../is-type";

export const isFunction = (value: unknown): boolean => isType(value, "function");
