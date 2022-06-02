import { isType } from "../is-type";

export const isArray = (value: unknown): boolean => isType(value, "array");
