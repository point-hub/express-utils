export const titleCase = (value: string): string => {
  if (value === undefined) {
    return "";
  }

  const smallWords = new Set([
    "a",
    "an",
    "and",
    "as",
    "at",
    "but",
    "by",
    "for",
    "in",
    "of",
    "on",
    "or",
    "the",
    "to",
    "with",
  ]);

  return value
    .toLowerCase()
    .split(" ")
    .map((word, index, array) => {
      if (index === 0 || index === array.length - 1 || !smallWords.has(word)) {
        return word.charAt(0).toUpperCase() + word.slice(1);
      }
      return word;
    })
    .join(" ");
};
