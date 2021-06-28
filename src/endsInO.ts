import { SuffixReturn } from './types';

const endsInO = (noun: string): SuffixReturn => {
  if (/[^aeiou]o$/gim.test(noun)) {
    return `${noun}es`;
  }
  if (/[aeiou]o$/gim.test(noun)) {
    return `${noun}s`;
  }
  return null;
};

export default endsInO;
