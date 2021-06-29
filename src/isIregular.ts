import { NounObject, SuffixReturn } from './types';
import irregularNouns from './data/irregularNouns';

const isIregular = (noun: string, count = 1): SuffixReturn => {
  const kind: keyof NounObject = count === 1 ? 'single' : 'plural';
  const nounObject = irregularNouns.find(item => item.single === noun);
  return nounObject ? nounObject[kind] : null;
};

export default isIregular;
