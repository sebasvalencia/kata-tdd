/**
 * Given an array of numbers, write a function that calculates the average of all the elements
 */

export const average = (arrayNumbers: Array<number>) => {
    const total =arrayNumbers.reduce( (acc, cur) => acc + cur ) 
    return Math.round(total / arrayNumbers.length)
}

