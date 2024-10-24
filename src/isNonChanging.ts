import type { SuffixReturn } from './types';
import {nonChangingNouns} from './nonChangingNouns.data';

export const isNonChanging = (noun: string): SuffixReturn => {
  return nonChangingNouns.includes(noun) ? noun : null;
};

