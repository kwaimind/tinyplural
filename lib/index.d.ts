declare type nounReturn = string | null;
export declare const isIregular: (noun: string, count?: number) => nounReturn;
export declare const isNonChanging: (noun: string) => nounReturn;
export declare const endsInO: (noun: string, count?: number) => nounReturn;
export declare const endsInY: (noun: string, count?: number) => nounReturn;
export declare const endsInFOrFe: (noun: string, count?: number) => nounReturn;
export declare const otherNouns: (noun: string, count?: number) => nounReturn;
export declare const usNouns: (noun: string, count?: number) => nounReturn;
export declare const isNouns: (noun: string, count?: number) => nounReturn;
export declare const standardNouns: (noun: string, count?: number) => nounReturn;
/**
 *
 * @param noun The singular noun `[hero]`
 * @param count The number of that noun, `[2]`
 * @returns A formatted string, `[2 heroes]`
 */
declare const makeSuffix: (noun: string, count?: number) => string;
export default makeSuffix;
