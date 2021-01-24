export interface NounObject {
  single: string;
  plural: string;
}

/**
 * An array of irregular nouns that follow no specific rules
 */
const irregularNouns: Array<NounObject> = [
  {
    single: 'child',
    plural: 'children',
  },
  {
    single: 'goose',
    plural: 'geese',
  },
  {
    single: 'man',
    plural: 'men',
  },
  {
    single: 'woman',
    plural: 'women',
  },
  {
    single: 'tooth',
    plural: 'teeth',
  },
  {
    single: 'foot',
    plural: 'feet',
  },
  {
    single: 'mouse',
    plural: 'mice',
  },
  {
    single: 'person',
    plural: 'people',
  },
  {
    single: 'ox',
    plural: 'oxen',
  },
  {
    single: 'phenomenon',
    plural: 'phenomena',
  },
  {
    single: 'criterion',
    plural: 'criteria',
  },
];

export default irregularNouns;
