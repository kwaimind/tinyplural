import { nonChangingNouns } from './nonChangingNouns.data';
import type { SuffixReturn } from './types';

export const isNonChanging = (noun: string): SuffixReturn => {
  return nonChangingNouns.indexOf(noun) !== -1 ? noun : null;
};
