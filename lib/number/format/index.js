export const numberFormat = (value, options = {
    accounting: false,
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
}) => {
    const numberValue = Number(value.toString());
    const nOptions = {};
    if (options.minimumFractionDigits !== undefined && options.minimumFractionDigits >= 0) {
        nOptions.minimumFractionDigits = options.minimumFractionDigits;
    }
    if (options.maximumFractionDigits !== undefined && options.maximumFractionDigits >= 0) {
        nOptions.maximumFractionDigits = options.maximumFractionDigits;
    }
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat
    const formattedValue = new Intl.NumberFormat("en", nOptions).format(numberValue);
    // wrap the number with parentheses instead of appending a minus sign
    if ((options === null || options === void 0 ? void 0 : options.accounting) && numberValue < 0) {
        return `(${formattedValue.substring(1)})`;
    }
    return formattedValue;
};
