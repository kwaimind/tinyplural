import { SuffixReturn } from './types';

const endsInUs = (noun: string): SuffixReturn => {
  if (noun.slice(-2) === 'us') {
    return noun.substring(0, noun.length - 2) + 'i';
  }
  return null;
};

export default endsInUs;
