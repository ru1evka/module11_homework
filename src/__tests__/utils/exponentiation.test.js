import { exponentiation } from "../../utils/exponentiation.js";

describe("tests for exponentiation function", () => {
  it("should operate correctly with number", () => {
    expect(exponentiation(2, 4)).toBe(16);
    expect(exponentiation(0)).toBe("Число ноль возвести в степень нельзя");
  });
});
