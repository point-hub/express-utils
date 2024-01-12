// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const objTrim = (obj) => {
    for (const [k, v] of Object.entries(obj)) {
        if (Object(v) === v)
            objTrim(v);
        else if (typeof v === "string")
            obj[k] = v.trim();
    }
    return obj;
};
