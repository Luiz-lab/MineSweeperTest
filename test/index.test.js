const { testjest } = require("../src/index");

describe("Validate the test", () => {
  it('Should return "Test String"', () => {
    expect(testjest()).toBe("Test String");
  });
});
