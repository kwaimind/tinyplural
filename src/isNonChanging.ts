import { SuffixReturn } from './types';
import nonChangingNouns from './data/nonChangingNouns';

const isNonChanging = (noun: string): SuffixReturn => {
  return nonChangingNouns.includes(noun) ? noun : null;
};

export default isNonChanging;
