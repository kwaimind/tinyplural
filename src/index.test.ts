import makeSuffix, { isIregular, isNonChanging } from "./index";

describe("When testing isIregular", () => {
  it("returns an irregular noun", () => {
    expect(isIregular("foot", 1)).toEqual("foot");
    expect(isIregular("man", 2)).toEqual("men");
  });
  it("returns null if no irregular noun is found", () => {
    expect(isIregular("footz", 1)).toEqual(null);
  });
});

describe("When testing isNonChanging", () => {
  it("returns an non changing noun", () => {
    expect(isNonChanging("fish")).toEqual("fish");
    expect(isNonChanging("deer")).toEqual("deer");
  });
  it("returns null if no non changing noun is found", () => {
    expect(isNonChanging("lion")).toEqual(null);
  });
});

describe("When testing makeSuffix", () => {
  it("returns the correct irregular noun", () => {
    expect(makeSuffix(1, "foot")).toEqual("1 foot");
    expect(makeSuffix(2, "foot")).toEqual("2 feet");
  });
  it("returns the correct non changing noun", () => {
    expect(makeSuffix(1, "fish")).toEqual("1 fish");
    expect(makeSuffix(2, "fish")).toEqual("2 fish");
  });
});
