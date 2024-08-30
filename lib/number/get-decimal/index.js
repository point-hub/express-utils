const roundToDecimalPlaces = (num, decimalPlaces) => {
    const factor = Math.pow(10, decimalPlaces);
    return Math.round(num * factor) / factor;
};
export const getDecimal = (value, decimalPlaces = 2) => {
    if (typeof value !== "number")
        return NaN;
    return Math.abs(roundToDecimalPlaces(value % 1, decimalPlaces));
};
