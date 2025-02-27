export function add(numbers: string): number {
  if (numbers === "") return 0;
  // return parseInt(numbers);

  const numArray = numbers.split(",").map(Number);
  return numArray.reduce((sum, num) => sum + num, 0);
}
