import { SuffixReturn } from './types';

const endsInY = (noun: string): SuffixReturn => {
  if (/[^aeiou]y$/gim.test(noun)) {
    return noun.replace('y', 'ies');
  }
  if (/[aeiou]y$/gim.test(noun)) {
    return `${noun}s`;
  }
  return null;
};

export default endsInY;
