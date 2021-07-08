import { SuffixReturn } from './types';
import nonChangingNouns from './nonChangingNouns.data';

const isNonChanging = (noun: string): SuffixReturn => {
  return nonChangingNouns.includes(noun) ? noun : null;
};

export default isNonChanging;
