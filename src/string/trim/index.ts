// Trim multiple whitespace at start, middle, and end of string
export const trim = (value: string): string => trimAll(value.trim());

// Trim multiple whitespace in string
export const trimAll = (value: string): string => value.replace(/ +/g, " ");

// Trim multiple whitespace at start of string
export const trimStart = (value: string): string => value.replace(/^\s+/g, "");

// Trim multiple whitespace at end of string
export const trimEnd = (value: string): string => value.replace(/\s+$/g, "");
