import irregularNouns, { NounObject } from './data/irregularNouns';
import nonChangingNouns from './data/nonChangingNouns';

type SuffixReturn = string | null;

export const isIregular = (noun: string, count = 1): SuffixReturn => {
  const kind: keyof NounObject = count === 1 ? 'single' : 'plural';
  const nounObject = irregularNouns.find(item => item.single === noun);
  return nounObject ? nounObject[kind] : null;
};

export const isNonChanging = (noun: string): SuffixReturn => {
  return nonChangingNouns.find(item => item === noun) || null;
};

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

  if (exceptions.indexOf(noun) !== -1) {
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

export const usNoun = (noun: string): SuffixReturn => {
  const regex = /us$/gim;
  if (regex.test(noun)) {
    return noun.replace(regex, 'i');
  }
  return null;
};

export const isNoun = (noun: string): SuffixReturn => {
  const regex = /is$/gim;
  if (regex.test(noun)) {
    return noun.replace(regex, 'es');
  }
  return null;
};

export const standardNoun = (noun: string): string => `${noun}s`;

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
    isNoun,
    schshxzNoun,
  ];

  if (typeof noun !== 'string') {
    throw new TypeError('expected a string');
  }

  if (count === 1) return `${count} ${noun}`;
  //if (count < 0) return null;

  for (let i = 0; i < nounFns.length; i += 1) {
    const nounFnResult = nounFns[i](noun, count);
    if (nounFnResult !== null) {
      return `${count} ${nounFnResult}`;
    }
  }

  return `${count} ${standardNoun(noun)}`;
};

export default makeSuffix;
