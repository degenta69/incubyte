import { add } from "./stringCalculator";

test("returns 0 for an empty string", () => {
  expect(add("")).toBe(0);
});

test("returns the number itself when only one number is provided", () => {
  expect(add("1")).toBe(1);
  expect(add("5")).toBe(5);
  expect(add("9")).toBe(9);
});

test("returns the sum of two comma-separated numbers", () => {
  expect(add("1,5")).toBe(6);
});

