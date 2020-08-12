declare type stringReturn = string | null;
export declare const isIregular: (noun: string, count?: number) => stringReturn;
export declare const isNonChanging: (noun: string) => stringReturn;
export declare const isONNoun: (noun: string, count?: number) => stringReturn;
export declare const endsInO: (noun: string, count?: number) => stringReturn;
export declare const endsInY: (noun: string, count?: number) => stringReturn;
export declare const endsInFOrFe: (noun: string, count?: number) => stringReturn;
declare const makeSuffix: (noun: string, count?: number) => string;
export default makeSuffix;
