// `Array.from()` is a static method available on the `Array` object in JavaScript. It creates a new, shallow-copied array from an array-like or iterable object. The primary use case for `Array.from()` is to convert an object that is not an array (but has iterable properties) into an array.

// #### Syntax:

// ```javascript
// Array.from(arrayLike[, mapFn[, thisArg]]);
// ```

// - **arrayLike:** The array-like or iterable object to convert to an array.
// - **mapFn (optional):** A map function to call on every element of the array.
// - **thisArg (optional):** Value to use as `this` when executing the map function.

// #### Examples:

// 1. **Convert String to Array:**

// ```javascript
// let str = 'hello';
// let charArray = Array.from(str);

// console.log(charArray);
// // Output: ['h', 'e', 'l', 'l', 'o']
// ```

// 2. **Convert Set to Array:**

// ```javascript
// let mySet = new Set([1, 2, 3]);
// let newArray = Array.from(mySet);

// console.log(newArray);
// // Output: [1, 2, 3]
// ```

// 3. **Mapping Function:**

// ```javascript
// let numbers = [1, 2, 3];
// let squaredNumbers = Array.from(numbers, x => x * x);

// console.log(squaredNumbers);
// // Output: [1, 4, 9]
// ```

// 4. **Using the Third Argument (`thisArg`):**

// ```javascript
// let obj = {
//   length: 3,
//   * [Symbol.iterator]() {
//     yield 1;
//     yield 2;
//     yield 3;
//   }
// };

// let mappedArray = Array.from(obj, function(value) {
//   return value * this.multiplier;
// }, { multiplier: 2 });

// console.log(mappedArray);
// // Output: [2, 4, 6]
// ```

// In the last example, the third argument (`thisArg`) is used to provide a context (`this.multiplier`) for the map function.

// `Array.from()` is a versatile method that can be helpful in various situations where you need to convert iterable or array-like objects into actual arrays.