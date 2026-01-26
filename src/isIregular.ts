import { irregularNouns } from './irregularNouns.data';
import type { SuffixReturn } from './types';

export const isIregular = (noun: string, count = 1): SuffixReturn => {
  const lowerNoun = noun.toLowerCase();
  if (!irregularNouns.has(lowerNoun)) return null;
  if (count === 1) return noun;

  const result = irregularNouns.get(lowerNoun);
  if (!result) return null;

  // Preserve original casing
  if (noun[0] !== noun[0].toLowerCase()) {
    return result.charAt(0).toUpperCase() + result.slice(1);
  }
  return result;
};
