const sum = require('./add')

describe("add", () => {
  test("should add 2 numbers", function() {
    expect(sum(1, 1)).toBe(2);
  });

  test("should add 2 numbers", function() {
    expect(sum(12, 2)).toBe(14);
  });

  test("should add 2 numbers", function() {
    expect(sum(-3, 1)).toBe(-2);
  });
});