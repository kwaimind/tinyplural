import { SuffixReturn } from './types';

const endsInFOrFe = (noun: string): SuffixReturn => {
  const exceptions = ['roof', 'cliff', 'proof'];

  if (exceptions.includes(noun)) {
    return `${noun}s`;
  }

  if (/(f|fe)$/gim.test(noun)) {
    return noun.replace(/(f|fe)$/, 'ves');
  }
  return null;
};

export default endsInFOrFe;
