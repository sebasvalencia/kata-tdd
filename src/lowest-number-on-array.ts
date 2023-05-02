/**
 * Create a function that given an array of numbers, find the lowest number
 */

export const lowestNumberOnArray = (arrayNumbers: Array<number>) => arrayNumbers.reduce( (acc, cur) => cur < acc ? cur : acc);
