/**
 * Generate text containing released year and
 * current year like 2016-2021 or just 2021
 * if released year equals current year.
 */
export const copyrightYear = (releaseYear) => {
    const currentYear = new Date().getFullYear();
    if (currentYear !== releaseYear) {
        return `${releaseYear}-${currentYear}`;
    }
    return releaseYear;
};
/**
 * Prints app name to handlebars template.
 */
export const appName = () => {
    return "Pointhub";
};
