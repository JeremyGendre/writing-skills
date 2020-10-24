import { FRENCH_NAMES } from '../words';

const DECODED_NAMES = JSON.parse(FRENCH_NAMES);

/**
 * @returns string
 */
export function getRandomWord(): string
{
    return DECODED_NAMES[Math.floor(Math.random() * DECODED_NAMES.length)];
}

/**
 * @param numberElements
 * @returns string[]
 */
export function getRandomWords(numberElements: number): Array<string>
{
    const result: Array<string> = [];
    for(let i = 0; i < numberElements; i++){
        result.push(getRandomWord());
    }
    return result;
}