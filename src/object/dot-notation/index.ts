export const dotNotation = (object: Record<string, string | object>, prefix = ""): Record<string, string> => {
  const result: Record<string, string> = {};
  Object.keys(object).forEach((key) => {
    const newPrefix = prefix ? `${prefix}.${key}` : key;
    const value = object[key];
    if (typeof value === "object") {
      Object.assign(result, dotNotation(object[key] as Record<string, string | object>, newPrefix));
    } else {
      result[newPrefix] = value;
    }
  });
  return result;
};
