import { SuffixReturn } from './types';

const findAndReplace = (
  noun: string,
  find: string,
  replace: string
): SuffixReturn => {
  if (noun.slice(-2) === find) {
    return noun.substring(0, noun.length - 2) + replace;
  }
  return null;
};

export default findAndReplace;
