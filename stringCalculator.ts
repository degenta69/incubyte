export function add(numbers: string): number {
  if (numbers === "") return 0;
  // return parseInt(numbers);

  let separator = /[\n,]/;

  if(numbers.substring(0, 2) === "//") {
    const index = numbers.indexOf("\n")
    separator = new RegExp(numbers.substring(2, index))
    numbers = numbers.substring(index + 1)
  }

  const numArray = numbers.split(separator).map(Number);
  return numArray.reduce((sum, num) => sum + num, 0);
}
