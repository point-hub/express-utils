import { isType } from "../is-type";

export const isNumber = (value: unknown): boolean => isType(value, "number");
