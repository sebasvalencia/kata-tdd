/**
 * Create a function that given an array of numbers, find the biggest number
 * 
 */

// export const biggestNumber = (arrayNumbers: Array<number>): number => arrayNumbers.reduce( (acc, cur) => cur > acc ? cur : acc )  

export function biggestNumber(arrayNumbers: Array<number>) {
    if(arrayNumbers.length === 0) return "Error: Array of number is empty";
    return arrayNumbers.reduce( (acc, cur) => cur > acc ? cur : acc ) 
}