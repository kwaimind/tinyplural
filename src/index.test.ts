import { isIregular } from "./index";

describe("When testing isIregular", () => {
  it("returns an irregular noun object", () => {
    expect(isIregular("foot")).toEqual({ plural: "feet", single: "foot" });
  });
  it("returns false if no irregular noun is found", () => {
    expect(isIregular("footz")).toEqual(false);
  });
});
