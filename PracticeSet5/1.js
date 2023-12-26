const array = [1, 2, 3, 4, 5];

// Pushing element 6 to the end of the array
array.push(6);
console.log(array); // Output: [1, 2, 3, 4, 5, 6]

// Popping the last element from the array
array.pop();
console.log(array); // Output: [1, 2, 3, 4, 5]

// Shifting (removing) the first element from the array
array.shift();
console.log(array); // Output: [2, 3, 4, 5]

// Unshifting (adding) element 0 to the beginning of the array
array.unshift(0);
console.log(array); // Output: [0, 2, 3, 4, 5]

// Splicing (inserting) elements 7 and 8 at index 1 without removing any elements
array.splice(1, 0, 7, 8);
console.log(array); // Output: [0, 7, 8, 2, 3, 4, 5]

// Concatenating the array with [9, 10], but not modifying the original array
array.concat([9, 10]);
console.log(array); // Output: [0, 7, 8, 2, 3, 4, 5]

// Sorting the array in lexicographic (alphabetical) order
array.sort();
console.log(array); // Output: [0, 2, 3, 4, 5, 7, 8]

// Reversing the order of elements in the array
array.reverse();
console.log(array); // Output: [8, 7, 5, 4, 3, 2, 0]

// Finding the index of element 3 in the array
console.log(array.indexOf(3)); // Output: 4

// Finding the last index of element 3 in the array
console.log(array.lastIndexOf(3)); // Output: 4

// Checking if the array includes element 3
console.log(array.includes(3)); // Output: true

// Checking if the array includes element 10
console.log(array.includes(10)); // Output: false
