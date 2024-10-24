import type { SuffixReturn, SimpleFunction } from './types';

export const matchesRegex = (
  noun: string,
  expression: string,
  replace: string | SimpleFunction
): SuffixReturn => {
  const regex = new RegExp(expression, 'gim');
  if (typeof replace === 'function' && regex.test(noun)) {
    return replace(noun);
  }
  if (regex.test(noun)) {
    return `${noun}${replace}`;
  }
  return null;
};

