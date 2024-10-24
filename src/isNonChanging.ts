import type { SuffixReturn } from './types';
import { nonChangingNouns } from './data';

export const isNonChanging = (noun: string): SuffixReturn => {
  return nonChangingNouns.includes(noun) ? noun : null;
};
