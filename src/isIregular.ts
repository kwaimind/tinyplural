import { irregularNouns } from './irregularNouns.data';
import type { SuffixReturn } from './types';

export const isIregular = (noun: string, count = 1): SuffixReturn => {
  const lowerNoun = noun.toLowerCase();
  const result = irregularNouns[lowerNoun];
  if (!result) return null;
  if (count === 1) return noun;

  if (noun[0] !== noun[0].toLowerCase()) {
    return result.charAt(0).toUpperCase() + result.slice(1);
  }
  return result;
};
