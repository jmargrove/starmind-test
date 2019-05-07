const main = () => {
  console.log("watching with nodemon 🚀");

  const input = ["s", "t", "a", "r", "m", "i", "n", "d"];
  const result: string[] = [];

  type CustomReverse = (accumulator: string[], letter: string) => string[];

  const customReverse: CustomReverse = (accumulator, letter) => {
    // Task 1: Implement this function such that it reverses the array when passing it to Array.prototype.reduce.
    accumulator.unshift(letter);
    return accumulator;
  };

  type AssignResult = (array: string[]) => void;

  const assignResult: AssignResult = array => {
    // Task 2: Above defined "const result" should hold the value of array.
    result.push(...array);
  };

  assignResult(input.reduce(customReverse, []));
  const testPassed = input.reverse().join("") === result.join("");
  testPassed
    ? console.log("Test is passed!!! 😄😄😄")
    : console.log("Test Failed 😞😞😞");

  // Bonus question: Why can't we check (result === input.reverse()) to find out whether the test has passed?

  // Arrays like input.reverse() and result are stored at references in the memory. This means that even though the
  // contents maybe the same, the references are different, and they are different objects. When we array1 === and array2
  // we test if they have the same reference essentially. The join method joins all elements of the array into a string.
  // strings can be directly compared with each othere. Essentially, if comparing objects we need to test if they are deeply equal to
  // each other, and therefore check the contents. Primitive types like strings and numbers have a reference in the memory and
  // therefor they can be compared.
};

main();
