import type { NounObject } from './types';

/**
 * An array of irregular nouns that follow no specific rules
 */
export const irregularNouns: NounObject[] = [
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

/**
 * An array of irregular nouns where the plural doesn't change
 */
export const nonChangingNouns: string[] = [
  'aircraft',
  'deer',
  'fish',
  'moose',
  'offspring',
  'sheep',
  'species',
  'salmon',
  'trout',
  'means',
  'series',
  'ice',
];
