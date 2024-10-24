import { isIregular } from './isIregular';
import { standardNoun } from './standardNoun';
import { isNonChanging } from './isNonChanging';
import { matchesRegex } from './matchesRegex';
import type { SimpleFunction, FunctionTypes } from './types';

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

const isSimpleFunction = (func: FunctionTypes): func is SimpleFunction => {
  return typeof func === 'function';
};

/**
 *
 * @param noun The singular noun `[hero]`
 * @param count The count of that noun, `[2]`
 * @returns {string} A formatted string, `[2 heroes]`
 */
const tinyplural = (noun: string, count = 1): string => {
  if (!noun) return '';

  if (count === 1) return `${count} ${noun}`;

  let result;

  functions.some((x) => {
    if (isSimpleFunction(x)) {
      const func = x;
      result = func(noun, count);
    } else {
      const { findKey, endKey } = x;
      result = matchesRegex(noun, findKey, endKey);
    }
    if (result !== null) return true;
  });

  return `${count} ${result}`;
};

export default tinyplural;
