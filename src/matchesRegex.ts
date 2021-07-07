import { SuffixReturn, SimpleFunction } from './types';

const matchesRegex = (
  noun: string,
  expression: string,
  replace: string | SimpleFunction
): SuffixReturn => {
  const regex = new RegExp(expression, 'gim');

  if (typeof replace === 'function' && regex.test(noun)) {
    return replace(noun);
  } else if (regex.test(noun)) {
    return `${noun}${replace}`;
  }

  return null;
};

export default matchesRegex;
