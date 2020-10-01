import irregularNouns from './data/irregularNouns';
import nonChangingNouns from './data/nonChangingNouns';

type suffixReturn = string | null;

export const isIregular = (noun: string, count = 1): suffixReturn => {
  const value = count === 1 ? 'single' : 'plural';
  const getNoun = irregularNouns.find((item) => item.single === noun);
  return getNoun?.[value] || null;
};

export const isNonChanging = (noun: string): suffixReturn => {
  return nonChangingNouns.find((item) => item === noun) || null;
};

export const endsInO = (noun: string): suffixReturn => {
  if (/[^aeiou]o$/gim.test(noun)) {
    return `${noun}es`;
  }
  if (/[aeiou]o$/gim.test(noun)) {
    return `${noun}s`;
  }
  return null;
};

export const endsInY = (noun: string): suffixReturn => {
  if (/[^aeiou]y$/gim.test(noun)) {
    return noun.replace('y', 'ies');
  }
  if (/[aeiou]y$/gim.test(noun)) {
    return `${noun}s`;
  }
  return null;
};

export const endsInFOrFe = (noun: string): suffixReturn => {
  const exceptions = ['roof', 'cliff', 'proof'];

  if (exceptions.indexOf(noun) !== -1) {
    return `${noun}s`;
  }

  if (/(f|fe)$/gim.test(noun)) {
    return noun.replace(/(f|fe)$/, 'ves');
  }
  return null;
};

export const schshxzNoun = (noun: string): suffixReturn => {
  if (/z$/gim.test(noun)) {
    return `${noun}zes`;
  }

  if (/(s|ch|sh|x|z)$/gim.test(noun)) {
    return `${noun}es`;
  }

  return null;
};

export const usNoun = (noun: string): suffixReturn => {
  const regex = /us$/gim;
  if (regex.test(noun)) {
    return noun.replace(regex, 'i');
  }
  return null;
};

export const isNoun = (noun: string): suffixReturn => {
  const regex = /is$/gim;
  if (regex.test(noun)) {
    return noun.replace(regex, 'es');
  }
  return null;
};

export const standardNoun = (noun: string): suffixReturn => `${noun}s`;

/**
 *
 * @param noun The singular noun `[hero]`
 * @param count The count of that noun, `[2]`
 * @returns A formatted string, `[2 heroes]`
 */
const makeSuffix = (noun: string, count = 1): suffixReturn => {
  if (typeof noun !== 'string' || noun === undefined) {
    throw new TypeError('expected a string');
  }

  if (count === 1) return `${count} ${noun}`;
  if (count < 0) return null;


  const nounFns = [
    isIregular,
    isNonChanging,
    endsInO,
    endsInY,
    endsInFOrFe,
    isNoun,
    schshxzNoun,
    standardNoun,
  ];

  for (const fn of nounFns) {
    const callFn = fn(noun, count);
    if (callFn !== null) {
      const result = `${count} ${callFn}`;
      return result;
    }
  }

  return null;
};

export default makeSuffix;
