import { getPercents } from "../../utils/getPercents.js";

describe("tests for getPercents function", () => {
  it("should getPercents string", () => { 
    expect(getPercents(30, 200)).toBe(60)
  });
});
