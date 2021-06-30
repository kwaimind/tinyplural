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

export interface FunctionWithOptions {
  action: FindAndReplaceFunc;
  findKey: string;
  endKey: string;
}
