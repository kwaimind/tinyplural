// https://www.grammarly.com/blog/plural-nouns/

import irregularNouns, { nounObject } from "./irregularNouns";

export const isIregular = (noun: string): nounObject | boolean => {
  return irregularNouns.find((item) => item.single === noun) || false;
};

const makeSuffix = (count: number, noun: string): string => {
  const value = count > 1 ? "plural" : "single";
  const irregularNoun = isIregular(noun);

  if (irregularNoun) {
    console.log("irregularNoun", irregularNoun);

    return irregularNoun[value];
  }

  return `${count}`;
};

export default makeSuffix;
