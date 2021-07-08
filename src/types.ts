export type SuffixReturn = string | null;

export interface NounObject {
  single: string;
  plural: string;
}

export type SimpleFunction = (noun: string, count?: number) => SuffixReturn;

export interface TinyPluralFunc {
  findKey: string;
  endKey: string | SimpleFunction;
}

export type FunctionTypes = TinyPluralFunc | SimpleFunction;
