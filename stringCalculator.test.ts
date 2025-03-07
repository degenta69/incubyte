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
  expect(add("1,5,5,2,1")).toBe(14);
});

test("handles new lines as delimiters along with commas", () => {
  expect(add("1\n2,3")).toBe(6);
});

test("handles custom delimiters", () => {
  expect(add("//;\n1;2")).toBe(3)
  expect(add("//;\n1;2;3")).toBe(6);
  expect(add("//-\n10-20-30")).toBe(60);
  expect(add("//f\n1f2f5f5")).toBe(13)
});

test("throws an error when negative numbers are provided", () => {
  expect(() => add("1,-2,3")).toThrow("negative numbers not allowed: -2");
  expect(() => add("-1,-5,3")).toThrow("negative numbers not allowed: -1, -5");
  expect(() => add("//;\n2;-4;3")).toThrow("negative numbers not allowed: -4");
});


