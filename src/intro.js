// Lesson: Writing your first tests
export const max = (a, b) => (a > b ? a : b);

// Exercise
export function fizzBuzz(n) {
  if (n % 3 === 0 && n % 5 === 0) return "FizzBuzz";
  if (n % 3 === 0) return "Fizz";
  if (n % 5 === 0) return "Buzz";
  return n.toString();
}

export const factorial = (number) => {
  if (number < 0) return undefined;
  return number === 0 ? 1 : factorial(number - 1) * number;
};
