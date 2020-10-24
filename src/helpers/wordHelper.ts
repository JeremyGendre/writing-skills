// @ts-ignore
import { FRENCH_WORDS } from '../words';

type Word = {
    type: string,
    frequency: number,
    label: string
};

const DECODED_NAMES: Array<Word> = JSON.parse(FRENCH_WORDS);

/**
 * @returns string
 */
export function getRandomWord(): string
{
    return DECODED_NAMES[Math.floor(Math.random() * DECODED_NAMES.length)].label;
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