export const jsonStringify = (data) => {
    if (typeof data === "object") {
        return JSON.stringify(data);
    }
    return data;
};
