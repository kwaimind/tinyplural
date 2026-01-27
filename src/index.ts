import { isIregular } from './isIregular';
import { isNonChanging } from './isNonChanging';

const rules: Array<[RegExp | null, (n: string) => string | null]> = [
  [null, isNonChanging],
  [
    /(photo|memo|piano|halo|canto|hetero|portico|quarto|kimono|albino|pro|combo|turbo|tobacco|afficionado|neutrino|rhino|steno|latino|casino|avocado|commando|tuxedo|speedo|nacho|motto|psycho|poncho|ghetto|mango|zero|taco|cello)$/i,
    (n) => `${n}s`,
  ],
  [/[^aeiou]o$/i, (n) => `${n}es`],
  [/[aeiou]o$/i, (n) => `${n}s`],
  [/[^aeiou]y$/i, (n) => n.replace(/y$/i, 'ies')],
  [/[aeiou]y$/i, (n) => `${n}s`],
  [
    /(roof|cliff|proof|chief|belief|safe|cuff|bluff|turf|giraffe|gaffe|tartufe|tartuffe|agrafe|agraffe|bouffe|carafe|chafe|pouffe|pouf|piaffe|knockoff|reef)$/i,
    (n) => `${n}s`,
  ],
  [/(f|fe)$/i, (n) => n.replace(/(f|fe)$/, 'ves')],
  [/(sis)$/i, (n) => `${n.substring(0, n.length - 2)}es`],
  [/(s|ch|sh|x|z)$/i, (n) => `${n}es`],
  [null, (n) => `${n}s`],
];

export const tinyplural = (noun: string, count = 1): string => {
  if (count === 1) return `${count} ${noun}`;

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
