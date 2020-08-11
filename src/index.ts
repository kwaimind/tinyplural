// https://www.grammarly.com/blog/plural-nouns/

import irregularNouns from "./irregularNouns";
import nonChangingNouns from "./nonChangingNouns";

type stringReturn = string | null;

export const isIregular = (noun: string, count: number): stringReturn => {
  const value = count > 1 ? "plural" : "single";
  const getNoun = irregularNouns.find((item) => item.single === noun) || {};
  return getNoun[value] || null;
};

export const isNonChanging = (noun: string): stringReturn => {
  return nonChangingNouns.find((item) => item === noun) || null;
};

const makeSuffix = (count: number, noun: string): string => {
  const nounFns = [isIregular, isNonChanging];

  let result!: string;

  nounFns.forEach((fn) => {
    const callFn = fn(noun, count);
    if (callFn !== null) {
      result = `${count} ${callFn}`;
    }
  });

  return result;
};

export default makeSuffix;
