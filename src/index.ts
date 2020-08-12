// https://www.grammarly.com/blog/plural-nouns/

import irregularNouns from './data/irregularNouns';
import nonChangingNouns from './data/nonChangingNouns';

type stringReturn = string | null;

export const isIregular = (noun: string, count: number): stringReturn => {
  const value = count > 1 ? 'plural' : 'single';
  const getNoun = irregularNouns.find((item) => item.single === noun) || {};
  return getNoun[value] || null;
};

export const isNonChanging = (noun: string): stringReturn => {
  return nonChangingNouns.find((item) => item === noun) || null;
};

export const isONNoun = (noun: string, count?: number): stringReturn => {
  const last2Chars = noun.slice(-2);
  if (/on/.test(last2Chars)) {
    return count && count > 1 ? noun.replace(/on/, 'a') : noun;
  }
  return null;
};

export const consonantO = (noun: string, count?: number): stringReturn => {
  if (/[^aeiou]o$/gim.test(noun)) {
    return count && count > 1 ? `${noun}es` : noun;
  }
  return null;
};

/**
 *
 * @param noun The singular noun
 * @param count The number of that noun
 */
const makeSuffix = (noun: string, count: number): string => {
  const nounFns = [isIregular, isNonChanging, isONNoun];

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
