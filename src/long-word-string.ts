/**
 * Given a string, write a function that finds the longest word in the string.
 */

export const longWordString = (stringOfWords: string) => stringOfWords.split(' ').reduce((acc, cur) => cur.length > acc.length ? cur : acc)