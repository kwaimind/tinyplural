import makeSuffix from "./index";

describe("When testing makeSuffix", () => {
  test("adds 1 + 2 to equal 3", () => {
    expect(makeSuffix(2)).toEqual("hey 2");
  });
});
