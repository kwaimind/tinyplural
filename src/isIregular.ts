import { irregularNouns } from "./irregularNouns.data";
import type { NounObject, SuffixReturn } from "./types";

export const isIregular = (noun: string, count = 1): SuffixReturn => {
  const kind: keyof NounObject = count === 1 ? "single" : "plural";
  const lowerNoun = noun.toLowerCase();
  const nounObject = irregularNouns.find((item) => item.single === lowerNoun);
  if (!nounObject) return null;

  const result = nounObject[kind];
  // Preserve original casing
  if (noun[0] !== noun[0].toLowerCase()) {
    return result.charAt(0).toUpperCase() + result.slice(1);
  }
  return result;
};
