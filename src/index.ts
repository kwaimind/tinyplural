import isIregular from './isIregular';
import standardNoun from './standardNoun';
import isNonChanging from './isNonChanging';
import endsInIs from './endsInIs';
import endsInUs from './endsInUs';

import { SuffixReturn } from './types';

const cache = new Map();

export const endsInO = (noun: string): SuffixReturn => {
  if (/[^aeiou]o$/gim.test(noun)) {
    return `${noun}es`;
  }
  if (/[aeiou]o$/gim.test(noun)) {
    return `${noun}s`;
  }
  return null;
};

export const endsInY = (noun: string): SuffixReturn => {
  if (/[^aeiou]y$/gim.test(noun)) {
    return noun.replace('y', 'ies');
  }
  if (/[aeiou]y$/gim.test(noun)) {
    return `${noun}s`;
  }
  return null;
};

export const endsInFOrFe = (noun: string): SuffixReturn => {
  const exceptions = ['roof', 'cliff', 'proof'];

  if (exceptions.includes(noun)) {
    return `${noun}s`;
  }

  if (/(f|fe)$/gim.test(noun)) {
    return noun.replace(/(f|fe)$/, 'ves');
  }
  return null;
};

export const schshxzNoun = (noun: string): SuffixReturn => {
  if (/z$/gim.test(noun)) {
    return `${noun}zes`;
  }

  if (/(s|ch|sh|x|z)$/gim.test(noun)) {
    return `${noun}es`;
  }

  return null;
};

/**
 *
 * @param noun The singular noun `[hero]`
 * @param count The count of that noun, `[2]`
 * @returns {string} A formatted string, `[2 heroes]`
 */
const makeSuffix = (noun: string, count = 1): string => {
  const nounFns = [
    isIregular,
    isNonChanging,
    endsInO,
    endsInY,
    endsInFOrFe,
    endsInIs,
    schshxzNoun,
    endsInUs,
  ];

  if (typeof noun !== 'string') {
    throw new TypeError('expected a string');
  }

  const cachedResult = cache.get(`${count} ${noun}`);

  if (cachedResult) {
    return cachedResult;
  }

  if (count === 1) return `${count} ${noun}`;

  for (let i = 0; i < nounFns.length; i += 1) {
    const nounFnResult = nounFns[i](noun, count);
    if (nounFnResult !== null) {
      cache.set(`${count} ${noun}`, `${count} ${nounFnResult}`);
      return `${count} ${nounFnResult}`;
    }
  }

  const standard = standardNoun(noun);
  cache.set(`${count} ${noun}`, `${count} ${standard}`);
  return `${count} ${standard}`;
};

export default makeSuffix;
