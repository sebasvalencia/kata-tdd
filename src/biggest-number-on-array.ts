/**
 * Create a function that given an array of numbers, find the biggest number
 * 
 */

export const biggestNumber = (arrayNumbers: Array<number>): number => arrayNumbers.reduce( (acc, cur) => cur > acc ? cur : acc )  