// Trim multiple whitespace at start, middle, and end of string
export const trim = (value) => trimAll(value.trim());
// Trim multiple whitespace in string
export const trimAll = (value) => value.replace(/ +/g, " ");
// Trim multiple whitespace at start of string
export const trimStart = (value) => value.replace(/^\s+/g, "");
// Trim multiple whitespace at end of string
export const trimEnd = (value) => value.replace(/\s+$/g, "");
