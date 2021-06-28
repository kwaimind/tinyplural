import { SuffixReturn } from './types';

const schshxzNoun = (noun: string): SuffixReturn => {
  if (noun.slice(-1) === 'z') {
    return `${noun}zes`;
  }

  if (/(s|ch|sh|x|z)$/gim.test(noun)) {
    return `${noun}es`;
  }

  return null;
};

export default schshxzNoun;
