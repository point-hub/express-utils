import { isType } from "../is-type";

export const isDate = (value: unknown): boolean => isType(value, "date");
