export const dotNotation = (object, prefix = "") => {
    const result = {};
    Object.keys(object).forEach((key) => {
        const newPrefix = prefix ? `${prefix}.${key}` : key;
        const value = object[key];
        if (typeof value === "object") {
            Object.assign(result, dotNotation(object[key], newPrefix));
        }
        else {
            result[newPrefix] = value;
        }
    });
    return result;
};
