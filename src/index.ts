// https://www.grammarly.com/blog/plural-nouns/

import irregularNouns from './data/irregularNouns';
import nonChangingNouns from './data/nonChangingNouns';

type stringReturn = string | null;

export const isIregular = (noun: string, count = 1): stringReturn => {
  const value = count > 1 ? 'plural' : 'single';
  const getNoun = irregularNouns.find((item) => item.single === noun) || {};
  return getNoun[value] || null;
};

export const isNonChanging = (noun: string): stringReturn => {
  return nonChangingNouns.find((item) => item === noun) || null;
};

export const isONNoun = (noun: string, count = 1): stringReturn => {
  const last2Chars = noun.slice(-2);
  if (/on/.test(last2Chars)) {
    return count && count > 1 ? noun.replace(/on/, 'a') : noun;
  }
  return null;
};

export const endsInO = (noun: string, count = 1): stringReturn => {
  if (/[^aeiou]o$/gim.test(noun)) {
    return count && count > 1 ? `${noun}es` : noun;
  }
  if (/[aeiou]o$/gim.test(noun)) {
    return count && count > 1 ? `${noun}s` : noun;
  }
  return null;
};

export const endsInY = (noun: string, count = 1): stringReturn => {
  if (/[^aeiou]y$/gim.test(noun)) {
    return count && count > 1 ? noun.replace('y', 'ies') : noun;
  }
  if (/[aeiou]y$/gim.test(noun)) {
    return count && count > 1 ? `${noun}s` : noun;
  }
  return null;
};

export const endsInFOrFe = (noun: string, count = 1): stringReturn => {
  const exceptions = ['roof', 'cliff', 'proof'];

  if (exceptions.indexOf(noun) !== -1) {
    return count && count > 1 ? `${noun}s` : noun;
  }

  if (/(f|fe)$/gim.test(noun)) {
    return count && count > 1 ? noun.replace(/(f|fe)$/, 'ves') : noun;
  }
  return null;
};

/**
 *
 * @param noun The singular noun `[hero]`
 * @param count The number of that noun, `[2]`
 * @returns A formatted string, `[2 heroes]`
 */
const makeSuffix = (noun: string, count = 1): string => {
  const nounFns = [isIregular, isNonChanging, isONNoun, endsInO, endsInFOrFe];
  let result!: string;

  nounFns.forEach((fn) => {
    const callFn = fn(noun, count);
    if (callFn !== null) {
      result = `${count} ${callFn}`;
    }
  });

  return result;
};

export default makeSuffix;
