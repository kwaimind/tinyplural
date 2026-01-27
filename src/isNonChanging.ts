import { nonChangingNouns } from './nonChangingNouns.data';
import type { SuffixReturn } from './types';

export const isNonChanging = (noun: string): SuffixReturn => {
  const lowerNoun = noun.toLowerCase();
  return nonChangingNouns.includes(lowerNoun) ? noun : null;
};
