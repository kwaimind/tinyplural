import isIregular from './isIregular';
import standardNoun from './standardNoun';
import isNonChanging from './isNonChanging';
import endsInIs from './endsInIs';
import endsInUs from './endsInUs';
import endsInFOrFe from './endsInFOrFe';
import endsInY from './endsInY';
import endsInO from './endsInO';
import schshxzNoun from './schshxzNoun';

const cache = new Map();

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
