import { describe, it, expect } from "vitest";
import { factorial, fizzBuzz, max } from "../src/intro";

describe("Test intro module functions", () => {
  /**
   * AAA rule
   * A - Arrange
   * A - Act
   * A - Asert
   */
  it("should return the first argument if it is greater value", () => {
    const a = 10;
    const b = 5;

    const result = max(a, b);

    expect(result).toBe(a);
  });
  it("should return the second argument if it is greater value", () => {
    const a = 10;
    const b = 50;

    const result = max(a, b);

    expect(result).toBe(b);
  });
  it("should return the first argument if it is same value", () => {
    const a = 10;
    const b = 10;

    const result = max(a, b);

    expect(result).toBe(a);
  });
});

describe("fizzBuzz", () => {
  it("should return the fizz-buzz if argument is divisible by both 3 & 5", () => {
    const a = 15;

    const result = fizzBuzz(a);

    expect(result).toBe("FizzBuzz");
  });
  it("should return the fizz if argument is divisible by 3", () => {
    const a = 9;

    const result = fizzBuzz(a);

    expect(result).toBe("Fizz");
  });
  it("should return the buzz if argument is divisible by 5", () => {
    const a = 10;

    const result = fizzBuzz(a);

    expect(result).toBe("Buzz");
  });
  it("should return the STRING if argument is not divisible by nither 3 nor 5", () => {
    const a = 7;

    const result = fizzBuzz(a);

    expect(result).toBe(a.toString());
  });
});

describe("factorial", () => {
  it("should return 1 if argument is 0", () => {
    const a = 0;

    const result = factorial(a);

    expect(result).toBe(1);
  });
  it("should return 1 if argument is 1", () => {
    const a = 1;

    const result = factorial(a);

    expect(result).toBe(1);
  });
  it("should return 120 if argument is 5", () => {
    const a = 5;

    const result = factorial(a);

    expect(result).toBe(120);
  });
  it("should return 6 if argument is 3", () => {
    const a = 3;

    const result = factorial(a);

    expect(result).toBe(6);
  });
  it("should return UNDEFINED if argument is negative number", () => {
    const a = -1;

    const result = factorial(a);

    expect(result).toBeUndefined();
  });
});
