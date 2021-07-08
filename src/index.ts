import isIregular from './isIregular';
import standardNoun from './standardNoun';
import isNonChanging from './isNonChanging';
import matchesRegex from './matchesRegex';
import { TinyPluralFunc, SimpleFunction, FunctionTypes } from './types';

const CHAR_S = 's';
const CHAR_ES = 'es';

const functions: FunctionTypes[] = [
  isIregular,
  isNonChanging,
  {
    findKey: '[^aeiou]o$',
    endKey: CHAR_ES,
  },
  {
    findKey: '[aeiou]o$',
    endKey: CHAR_S,
  },
  {
    findKey: '[^aeiou]y$',
    endKey: (noun: string) => noun.replace('y', 'ies'),
  },
  {
    findKey: '[aeiou]y$',
    endKey: CHAR_S,
  },
  {
    findKey: '(roof|cliff|proof)',
    endKey: CHAR_S,
  },
  {
    findKey: '(f|fe)$',
    endKey: (noun: string) => noun.replace(/(f|fe)$/, 'ves'),
  },
  {
    findKey: '(is)$',
    endKey: (noun: string) => noun.substring(0, noun.length - 2) + CHAR_ES,
  },
  {
    findKey: '(z)$',
    endKey: 'zes',
  },
  {
    findKey: '(s|ch|sh|x|z)$',
    endKey: CHAR_ES,
  },
  {
    findKey: '(is)$',
    endKey: (noun: string) => noun.substring(0, noun.length - 2) + 'i',
  },
  standardNoun,
];

const cache = new Map();

/**
 *
 * @param noun The singular noun `[hero]`
 * @param count The count of that noun, `[2]`
 * @returns {string} A formatted string, `[2 heroes]`
 */
const tinyplural = (noun: string, count = 1): string => {
  if (!noun || typeof noun !== 'string') throw Error('expected a string');
  if (count === 1) return `${count} ${noun}`;

  const cachedResult = cache.get(`${count} ${noun}`);
  if (cachedResult) return cachedResult;

  let result;
  for (let i = 0; i < functions.length; i += 1) {
    if (typeof functions[i] === 'function') {
      const func = functions[i] as SimpleFunction;
      result = func(noun, count);
    } else {
      const { findKey, endKey } = functions[i] as TinyPluralFunc;
      result = matchesRegex(noun, findKey, endKey);
    }
    if (result !== null) break;
  }

  cache.set(`${count} ${noun}`, `${count} ${result}`);
  return `${count} ${result}`;
};

export default tinyplural;
