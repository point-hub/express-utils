export const jsonParse = (data) => {
    if (typeof data === "string") {
        return JSON.parse(data);
    }
    return data;
};
