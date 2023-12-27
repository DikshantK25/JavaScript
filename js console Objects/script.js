// It seems like you're referring to various functions or methods related to the JavaScript `console` object,
// commonly used for logging information to the browser's developer console.
//   Here are some commonly used methods of the `console` object:

// 1. **`console.log()`**
//    - Outputs a message to the console.
//    - Example:
//      ```javascript
//      console.log('Hello, World!');
//      ```

// 2. **`console.error()`**
//    - Outputs an error message to the console with a red "error" icon.
//    - Example:
//      ```javascript
//      console.error('This is an error message.');
//      ```

// 3. **`console.warn()`**
//    - Outputs a warning message to the console with a yellow "warning" icon.
//    - Example:
//      ```javascript
//      console.warn('This is a warning message.');
//      ```

// 4. **`console.info()`**
//    - Outputs an informational message to the console with a blue "info" icon.
//    - Example:
//      ```javascript
//      console.info('This is an informational message.');
//      ```

// 5. **`console.clear()`**
//    - Clears the console.
//    - Example:
//      ```javascript
//      console.clear();
//      ```

// 6. **`console.table()`**
//    - Displays tabular data as a table.
//    - Example:
//      ```javascript
//      const data = [
//        { name: 'John', age: 30 },
//        { name: 'Jane', age: 25 }
//      ];

//      console.table(data);
//      ```

// 7. **`console.group()` / `console.groupEnd()`**
//    - Groups related log messages together.
//    - Example:
//      ```javascript
//      console.group('Group 1');
//      console.log('Message 1');
//      console.log('Message 2');
//      console.groupEnd();
//      ```

// 8. **`console.time()` / `console.timeEnd()`**
//    - Measures the time taken by a block of code.
//    - Example:
//      ```javascript
//      console.time('Timer');
//      // Some code to measure time
//      console.timeEnd('Timer');
//      ```

// These methods are useful for debugging, monitoring code execution, and providing feedback during development.
// You can use them in the browser's developer console to get insights into your JavaScript code.

//in table format:
console.table(console);


// Using console.time() and console.timeEnd() to measure loop execution time

// Example: Measure time taken by a for loop
console.time('For Loop');

for (let i = 0; i < 1000000; i++) {
  // Your code inside the loop
}

console.timeEnd('For Loop');

// Example: Measure time taken by a while loop
let j = 0;
console.time('While Loop');

while (j < 1000000) {
  // Your code inside the loop
  j++;
}

console.timeEnd('While Loop');
