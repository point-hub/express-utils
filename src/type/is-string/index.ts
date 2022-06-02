import { isType } from "../is-type";

export const isString = (value: unknown): boolean => isType(value, "string");
