const numbers = [1, 2, 3, 4, 5, 6];

// Filtering even numbers
const evenNumbers = numbers.filter(function(number) {
  return number % 2 === 0;
});

console.log(evenNumbers);
// Output: [2, 4, 6]
