import isIregular from './isIregular';
import standardNoun from './standardNoun';
import isNonChanging from './isNonChanging';
import matchesRegex from './matchesRegex';

import { TinyPluralFunc, SimpleFunction, FunctionTypes } from './types';

const functions: FunctionTypes[] = [
  isIregular,
  isNonChanging,
  {
    action: matchesRegex,
    findKey: '[^aeiou]o$',
    endKey: 'es',
  },
  {
    action: matchesRegex,
    findKey: '[aeiou]o$',
    endKey: 's',
  },
  {
    action: matchesRegex,
    findKey: '[^aeiou]y$',
    endKey: (noun: string) => noun.replace('y', 'ies'),
  },
  {
    action: matchesRegex,
    findKey: '[aeiou]y$',
    endKey: 's',
  },
  {
    action: matchesRegex,
    findKey: '(roof|cliff|proof)',
    endKey: 's',
  },
  {
    action: matchesRegex,
    findKey: '(f|fe)$',
    endKey: (noun: string) => noun.replace(/(f|fe)$/, 'ves'),
  },
  {
    action: matchesRegex,
    findKey: '(is)$',
    endKey: (noun: string) => noun.substring(0, noun.length - 2) + 'es',
  },
  {
    action: matchesRegex,
    findKey: '(z)$',
    endKey: 'zes',
  },
  {
    action: matchesRegex,
    findKey: '(s|ch|sh|x|z)$',
    endKey: 'es',
  },
  {
    action: matchesRegex,
    findKey: '(is)$',
    endKey: (noun: string) => noun.substring(0, noun.length - 2) + 'i',
  },
];

const cache = new Map();

/**
 *
 * @param noun The singular noun `[hero]`
 * @param count The count of that noun, `[2]`
 * @returns {string} A formatted string, `[2 heroes]`
 */
const tinyplural = (noun: string, count = 1): string => {
  if (typeof noun !== 'string') {
    throw new TypeError('expected a string');
  }

  const cachedResult = cache.get(`${count} ${noun}`);

  if (cachedResult) {
    return cachedResult;
  }

  if (count === 1) return `${count} ${noun}`;

  for (let i = 0; i < functions.length; i += 1) {
    let result;
    if (typeof functions[i] === 'function') {
      const func = functions[i] as SimpleFunction;
      result = func(noun, count);
    } else {
      const { action, findKey, endKey } = functions[i] as TinyPluralFunc;
      result = action(noun, findKey, endKey);
    }

    if (result !== null) {
      cache.set(`${count} ${noun}`, `${count} ${result}`);
      return `${count} ${result}`;
    }
  }

  const standard = standardNoun(noun);
  cache.set(`${count} ${noun}`, `${count} ${standard}`);
  return `${count} ${standard}`;
};

export default tinyplural;
