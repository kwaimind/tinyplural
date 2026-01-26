import { isIregular } from './isIregular';
import { isNonChanging } from './isNonChanging';

const CHAR_S = 's';
const CHAR_ES = 'es';

const rules: Array<[RegExp | null, (n: string) => string | null]> = [
  [null, isNonChanging],
  [/(photo|memo|piano|halo)$/i, (n) => n + CHAR_S],
  [/[^aeiou]o$/i, (n) => n + CHAR_ES],
  [/[aeiou]o$/i, (n) => n + CHAR_S],
  [/[^aeiou]y$/i, (n) => n.replace('y', 'ies')],
  [/[aeiou]y$/i, (n) => n + CHAR_S],
  [/(roof|cliff|proof|chief|belief|safe)$/i, (n) => n + CHAR_S],
  [/(f|fe)$/i, (n) => n.replace(/(f|fe)$/, 'ves')],
  [/(is)$/i, (n) => n.substring(0, n.length - 2) + CHAR_ES],
  [/(z)$/i, (n) => `${n}zes`],
  [/(s|ch|sh|x|z)$/i, (n) => n + CHAR_ES],
  [null, (n) => `${n}s`],
];

/**
 *
 * @param noun The singular noun `[hero]`
 * @param count The count of that noun, `[2]`
 * @returns {string} A formatted string, `[2 heroes]`
 */
export const tinyplural = (noun: string, count = 1): string => {
  if (count === 1) return `${count} ${noun}`;

  // check irregular first with count
  const irregularResult = isIregular(noun, count);
  if (irregularResult !== null) return `${count} ${irregularResult}`;

  for (const [pattern, transform] of rules) {
    if (pattern === null || pattern.test(noun)) {
      const result = transform(noun);
      if (result !== null) return `${count} ${result}`;
    }
  }

  return `${count} ${noun}`;
};
