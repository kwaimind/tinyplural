import { SuffixReturn } from './types';

const findAndReplace = (noun: string): SuffixReturn => {
  if (noun.slice(-2) === 'is') {
    return noun.substring(0, noun.length - 2) + 'es';
  }
  return null;
};

export default findAndReplace;
