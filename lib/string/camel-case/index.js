export const camelCase = (value) => {
    return value
        .replace(/(?:^\w|[A-Z]|\b\w)/g, function (word, index) {
        return index === 0 ? word.toLowerCase() : word.toUpperCase();
    })
        .replace(/[^0-9a-zA-Z]/g, "");
};
