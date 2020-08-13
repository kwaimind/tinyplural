// https://www.grammarly.com/blog/plural-nouns/

import irregularNouns from './data/irregularNouns';
import nonChangingNouns from './data/nonChangingNouns';

type nounReturn = string | null;

export const isIregular = (noun: string, count = 1): nounReturn => {
  const value = count > 1 ? 'plural' : 'single';
  const getNoun = irregularNouns.find((item) => item.single === noun) || {};
  return getNoun[value] || null;
};

export const isNonChanging = (noun: string): nounReturn => {
  return nonChangingNouns.find((item) => item === noun) || null;
};

export const endsInO = (noun: string, count = 1): nounReturn => {
  if (/[^aeiou]o$/gim.test(noun)) {
    return count && count > 1 ? `${noun}es` : noun;
  }
  if (/[aeiou]o$/gim.test(noun)) {
    return count && count > 1 ? `${noun}s` : noun;
  }
  return null;
};

export const endsInY = (noun: string, count = 1): nounReturn => {
  if (/[^aeiou]y$/gim.test(noun)) {
    return count && count > 1 ? noun.replace('y', 'ies') : noun;
  }
  if (/[aeiou]y$/gim.test(noun)) {
    return count && count > 1 ? `${noun}s` : noun;
  }
  return null;
};

export const endsInFOrFe = (noun: string, count = 1): nounReturn => {
  const exceptions = ['roof', 'cliff', 'proof'];

  if (exceptions.indexOf(noun) !== -1) {
    return count && count > 1 ? `${noun}s` : noun;
  }

  if (/(f|fe)$/gim.test(noun)) {
    return count && count > 1 ? noun.replace(/(f|fe)$/, 'ves') : noun;
  }
  return null;
};

export const otherNouns = (noun: string, count = 1): nounReturn => {
  if (/z$/gim.test(noun)) {
    return count && count > 1 ? `${noun}zes` : noun;
  }

  if (/(s|ch|sh|x|z)$/gim.test(noun)) {
    return count && count > 1 ? `${noun}es` : noun;
  }

  return null;
};

export const usNouns = (noun: string, count = 1): nounReturn => {
  const regex = /us$/gim;
  if (regex.test(noun)) {
    return count && count > 1 ? noun.replace(regex, 'i') : noun;
  }
  return null;
};

export const isNouns = (noun: string, count = 1): nounReturn => {
  const regex = /is$/gim;
  if (regex.test(noun)) {
    return count && count > 1 ? noun.replace(regex, 'es') : noun;
  }
  return null;
};

export const standardNouns = (noun: string, count = 1): nounReturn => {
  return count && count > 1 ? `${noun}s` : noun;
};

/**
 *
 * @param noun The singular noun `[hero]`
 * @param count The number of that noun, `[2]`
 * @returns A formatted string, `[2 heroes]`
 */
const makeSuffix = (noun: string, count = 1): string => {
  const nounFns = [
    isIregular,
    isNonChanging,
    endsInO,
    endsInY,
    endsInFOrFe,
    isNouns,
    otherNouns,
    standardNouns,
  ];
  let result!: string;

  for (let i = 0; i < nounFns.length; i++) {
    const callFn = nounFns[i](noun, count);
    if (callFn !== null) {
      result = `${count} ${callFn}`;
      break;
    }
  }

  return result;
};

export default makeSuffix;
