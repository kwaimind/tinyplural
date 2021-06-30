import isIregular from './isIregular';
import standardNoun from './standardNoun';
import isNonChanging from './isNonChanging';
//import endsInIs from './endsInIs';
//import endsInUs from './endsInUs';
import endsInFOrFe from './endsInFOrFe';
import endsInY from './endsInY';
import endsInO from './endsInO';
import schshxzNoun from './schshxzNoun';
import findAndReplace from './findAndReplace';

import { FunctionWithOptions, SimpleFunction } from './types';

const functions: (FunctionWithOptions | SimpleFunction)[] = [
  isIregular,
  isNonChanging,
  endsInO,
  endsInY,
  endsInFOrFe,
  {
    action: findAndReplace,
    findKey: 'is',
    endKey: 'es',
  },
  schshxzNoun,
  {
    action: findAndReplace,
    findKey: 'is',
    endKey: 'i',
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
      const { action, findKey, endKey } = functions[i] as FunctionWithOptions;
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
