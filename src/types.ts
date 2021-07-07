export type SuffixReturn = string | null;

export interface NounObject {
  single: string;
  plural: string;
}

export type SimpleFunction = (noun: string, count?: number) => SuffixReturn;

export type FindAndReplaceFunc = (
  noun: string,
  find: string,
  replace: string
) => SuffixReturn;

export type MatchRegexFunc = (
  noun: string,
  expression: string,
  replace: string
) => SuffixReturn;

// Types
export interface TinyPluralFunc {
  action: FindAndReplaceFunc;
  findKey: string;
  endKey: string | SimpleFunction;
}

export type FunctionTypes = TinyPluralFunc | SimpleFunction;
