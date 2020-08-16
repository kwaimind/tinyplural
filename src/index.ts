import irregularNouns from './data/irregularNouns';
import nonChangingNouns from './data/nonChangingNouns';

type stringReturn = string | null;

export const isIregular = (noun: string, count = 1): stringReturn => {
  const value = count === 1 ? 'single' : 'plural';
  const getNoun = irregularNouns.find((item) => item.single === noun) || {};
  return getNoun[value] || null;
};

export const isNonChanging = (noun: string): stringReturn => {
  return nonChangingNouns.find((item) => item === noun) || null;
};

export const endsInO = (noun: string): stringReturn => {
  if (/[^aeiou]o$/gim.test(noun)) {
    return `${noun}es`;
  }
  if (/[aeiou]o$/gim.test(noun)) {
    return `${noun}s`;
  }
  return null;
};

export const endsInY = (noun: string): stringReturn => {
  if (/[^aeiou]y$/gim.test(noun)) {
    return noun.replace('y', 'ies');
  }
  if (/[aeiou]y$/gim.test(noun)) {
    return `${noun}s`;
  }
  return null;
};

export const endsInFOrFe = (noun: string): stringReturn => {
  const exceptions = ['roof', 'cliff', 'proof'];

  if (exceptions.indexOf(noun) !== -1) {
    return `${noun}s`;
  }

  if (/(f|fe)$/gim.test(noun)) {
    return noun.replace(/(f|fe)$/, 'ves');
  }
  return null;
};

export const otherNouns = (noun: string): stringReturn => {
  if (/z$/gim.test(noun)) {
    return `${noun}zes`;
  }

  if (/(s|ch|sh|x|z)$/gim.test(noun)) {
    return `${noun}es`;
  }

  return null;
};

export const usNouns = (noun: string): stringReturn => {
  const regex = /us$/gim;
  if (regex.test(noun)) {
    return noun.replace(regex, 'i');
  }
  return null;
};

export const isNouns = (noun: string): stringReturn => {
  const regex = /is$/gim;
  if (regex.test(noun)) {
    return noun.replace(regex, 'es');
  }
  return null;
};

export const standardNouns = (noun: string): stringReturn => `${noun}s`;

/**
 *
 * @param noun The singular noun `[hero]`
 * @param count The number of that noun, `[2]`
 * @returns A formatted string, `[2 heroes]`
 */
const makeSuffix = (noun: string, count = 1): stringReturn => {
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

  if (typeof noun !== 'string' || noun === undefined) {
    throw new TypeError('expected a string');
  }

  if (count === 1) return `${count} ${noun}`;
  if (count < 0) return null;

  for (let i = 0; i < nounFns.length; i += 1) {
    const callFn = nounFns[i](noun, count);
    if (callFn !== null) {
      result = `${count} ${callFn}`;
      break;
    }
  }

  return result;
};

export default makeSuffix;
