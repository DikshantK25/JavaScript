let fruits = ["apple", "banana", "orange"];

// Using delete to remove the element at index 1
delete fruits[1];

console.log(fruits);
// Output: ["apple", undefined, "orange"]
length = fruits.length;
console.log(length);//does not effect length



//concat()
let array1 = [1, 2, 3];
let array2 = [4, 5, 6];
let array3 = [7, 8, 9];

let result = array1.concat(array2, array3);

console.log(result);
// Output: [1, 2, 3, 4, 5, 6, 7, 8, 9]



let numbers = [5, 2, 8, 1, 4];

// Sorting the array numerically
numbers.sort(function(a, b) {
  return a - b;
});

// If compare(a, b) returns a negative value, a will be placed before b.
// If compare(a, b) returns a positive value, b will be placed before a.
// If compare(a, b) returns zero, the order of a and b doesn't change.

//more
// The `concat()` method in JavaScript is used to combine two or more arrays, creating a new array without modifying the original arrays. Here are a few examples of using the `concat()` method:

// ### Example 1: Concatenating Two Arrays

// ```javascript
// let array1 = [1, 2, 3];
// let array2 = [4, 5, 6];

// let result = array1.concat(array2);

// console.log(result);
// // Output: [1, 2, 3, 4, 5, 6]
// ```

// In this example, `concat()` is used to concatenate `array1` and `array2` into a new array.

// ### Example 2: Concatenating Multiple Arrays

// ```javascript
// let array1 = [1, 2, 3];
// let array2 = [4, 5, 6];
// let array3 = [7, 8, 9];

// let result = array1.concat(array2, array3);

// console.log(result);
// // Output: [1, 2, 3, 4, 5, 6, 7, 8, 9]
// ```

// Here, `concat()` is used to concatenate three arrays into a new array.

// ### Example 3: Concatenating Arrays with Values

// ```javascript
// let array1 = [1, 2, 3];
// let value = 4;
// let array2 = [5, 6];
// let array3 = [7, 8, 9];

// let result = array1.concat(value, array2, array3);

// console.log(result);
// // Output: [1, 2, 3, 4, 5, 6, 7, 8, 9]
// ```

// In this example, a value (`4`) is concatenated with arrays using `concat()`.

// ### Example 4: Combining Arrays and Strings

// ```javascript
// let array1 = [1, 2, 3];
// let str = "hello";
// let array2 = [4, 5, 6];

// let result = array1.concat(str, array2);

// console.log(result);
// // Output: [1, 2, 3, "hello", 4, 5, 6]
// ```

// Here, arrays and a string are combined using `concat()`.

// ### Example 5: Concatenating Nested Arrays

// ```javascript
// let array1 = [1, 2];
// let nestedArray = [[3, 4], [5, 6]];
// let array2 = [7, 8];

// let result = array1.concat(nestedArray, array2);

// console.log(result);
// // Output: [1, 2, [3, 4], [5, 6], 7, 8]
// ```

// // In this example, nested arrays are concatenated with other arrays.

// // The `concat()` method is versatile and allows you to concatenate arrays and values in various ways, providing a new array as a result.



//more
// console.log(numbers);
// // Output: [1, 2, 4, 5, 8]
// The `sort()` method in JavaScript is used to sort the elements of an array. By default, the `sort()` method sorts the elements as strings, resulting in lexicographic (dictionary-style) ordering. Here are examples of using the `sort()` method:

// ### Example 1: Sorting Numeric Array

// ```javascript
// let numbers = [5, 2, 8, 1, 4];

// // Sorting the array numerically
// numbers.sort(function(a, b) {
//   return a - b;
// });

// console.log(numbers);
// // Output: [1, 2, 4, 5, 8]
// ```

// In this example, the `sort()` method is used with a custom comparison function to sort the array `numbers` numerically.

// ### Example 2: Sorting String Array

// ```javascript
// let fruits = ["banana", "apple", "orange", "grape"];

// // Sorting the array lexicographically
// fruits.sort();

// console.log(fruits);
// // Output: ["apple", "banana", "grape", "orange"]
// ```

// For strings, the `sort()` method sorts the array lexicographically by default.

// ### Example 3: Sorting Object Array

// ```javascript
// let people = [
//   { name: "John", age: 30 },
//   { name: "Alice", age: 25 },
//   { name: "Bob", age: 35 }
// ];

// // Sorting the array of objects based on age
// people.sort(function(a, b) {
//   return a.age - b.age;
// });

// console.log(people);
// // Output: [{ name: "Alice", age: 25 }, { name: "John", age: 30 }, { name: "Bob", age: 35 }]
// ```

// The `sort()` method can also be used to sort an array of objects based on a specific property.

// ### Example 4: Sorting in Descending Order

// ```javascript
// let numbers = [5, 2, 8, 1, 4];

// // Sorting the array numerically in descending order
// numbers.sort(function(a, b) {
//   return b - a;
// });

// console.log(numbers);
// // Output: [8, 5, 4, 2, 1]
// ```

// To sort an array in descending order, the comparison function is modified to return `b - a`.

// ### Note:
// - The `sort()` method sorts the array in place and returns a reference to the sorted array.
// - If a comparison function is not provided, elements are converted to strings and sorted lexicographically.
// - The custom comparison function should return a negative, zero, or positive value, indicating the relative order of the two elements being compared.