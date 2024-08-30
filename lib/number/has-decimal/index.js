export const hasDecimal = (value) => {
    return typeof value === "number" && value % 1 !== 0;
};
