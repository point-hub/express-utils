import { isType } from "../is-type";

export const isBoolean = (value: unknown): boolean => isType(value, "boolean");
