import { isType } from "../is-type";

export const isObject = (value: unknown): boolean => isType(value, "object");
