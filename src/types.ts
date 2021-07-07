export type SuffixReturn = string | null;

export interface NounObject {
  single: string;
  plural: string;
}

export type SimpleFunction = (noun: string, count?: number) => SuffixReturn;

export type MatchRegexFunc = (
  noun: string,
  expression: string,
  replace: string | SimpleFunction
) => SuffixReturn;

export interface TinyPluralFunc {
  action: MatchRegexFunc;
  findKey: string;
  endKey: string | SimpleFunction;
}

export type FunctionTypes = TinyPluralFunc | SimpleFunction;
