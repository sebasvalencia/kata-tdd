/**
 * Given an array of numbers, write a function that calculates the sum of all the elements.
 */

export const addAllNumbers = (arrayNumbers: Array<number>): number => arrayNumbers.reduce( (acc, cur) => acc + cur )
