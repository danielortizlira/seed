/**
 * Source: https://joshwcomeau.com/snippets/javascript/random
 * @param min - The min value for the generate int (inclusive)
 * @param max - the max value for the generate int (exclusive) 
 */
export const getRandomInt = (min: number, max: number) => Math.floor(Math.random() * (max - min)) + min;