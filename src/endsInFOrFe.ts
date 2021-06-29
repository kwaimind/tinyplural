import { SuffixReturn } from './types';

const exceptions = ['roof', 'cliff', 'proof'];

const endsInFOrFe = (noun: string): SuffixReturn => {
  if (exceptions.includes(noun)) {
    return `${noun}s`;
  }

  if (/(f|fe)$/gim.test(noun)) {
    return noun.replace(/(f|fe)$/, 'ves');
  }
  return null;
};

export default endsInFOrFe;
