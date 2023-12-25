// Creating an array of numbers
let numbers = [1, 2, 3, 4, 5];

// Creating an array of strings
let fruits = ["apple", "banana", "orange"];

// Creating an array of mixed data types
let mixedArray = [1, "hello", true, [2, 4, 6]];

// Creating an empty array
let emptyArray = [];


console.log(numbers[0]);   // Output: 1
console.log(fruits[1]);    // Output: banana
console.log(mixedArray[2]); // Output: true
console.log(mixedArray[3]); // Output: [2, 4, 6]


numbers[2] = 10;
console.log(numbers); // Output: [1, 2, 10, 4, 5]





// push: Adds one or more elements to the end of an array.
// pop: Removes the last element from the end of an array.
// shift: Removes the first element from the beginning of an array.
// unshift: Adds one or more elements to the beginning of an array.
// splice: Adds or removes elements from a specific position in an array.
// concat: Combines two or more arrays

let colors = ["red", "green", "blue"];

colors.push("yellow");      // Add "yellow" to the end
console.log(colors);         // Output: ["red", "green", "blue", "yellow"]

colors.pop();               // Remove the last element ("yellow")
console.log(colors);         // Output: ["red", "green", "blue"]

colors.unshift("orange");    // Add "orange" to the beginning
console.log(colors);         // Output: ["orange", "red", "green", "blue"]

colors.shift();             // Remove the first element ("orange")
console.log(colors);         // Output: ["red", "green", "blue"]

colors.splice(1, 0, "purple", "pink");
// Add "purple" and "pink" after the first element (at index 1)
console.log(colors);
// Output: ["red", "purple", "pink", "green", "blue"]


// Using a for loop
for (let i = 0; i < colors.length; i++) {
    console.log(colors[i]);
  }
  
  // Using forEach
  colors.forEach(color => console.log(color));
  

  console.log(numbers.length); // Output: 5
