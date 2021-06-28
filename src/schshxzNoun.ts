import { SuffixReturn } from './types';

const schshxzNoun = (noun: string): SuffixReturn => {
  if (/z$/gim.test(noun)) {
    return `${noun}zes`;
  }

  if (/(s|ch|sh|x|z)$/gim.test(noun)) {
    return `${noun}es`;
  }

  return null;
};

export default schshxzNoun;
