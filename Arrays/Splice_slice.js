// array.splice(start, deleteCount, item1, item2, ...);


let numbers = [1, 2, 3, 4, 5];

// Remove 2 elements starting from index 1, and insert 'a' and 'b' at that position
let removedElements = numbers.splice(1, 2, 'a', 'b');

console.log(numbers);
// Output: [1, 'a', 'b', 4, 5]

console.log(removedElements);
// Output: [2, 3]


// array.slice(start, end);

let number = [1, 2, 3, 4, 5];

// Create a new array by slicing from index 1 to 4 (exclusive)
let slicedArray = number.slice(1, 4);

console.log(slicedArray);
// Output: [2, 3, 4]

console.log(number);
// Output: [1, 2, 3, 4, 5] (original array is unchanged)

