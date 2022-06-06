import { easyNumber } from "../index.js";

describe("test easyNumber", () => {
  it("test for easyNumber", () => {
    const result = easyNumber(11);
    expect(result).toBe("Простое число");
  })
});
