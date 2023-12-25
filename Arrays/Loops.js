// 1. For Loop:
let fruits = ["apple", "banana", "orange"];

for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}
// Output:
// apple
// banana
// orange

// 2. For...of Loop:


for (let fruit of fruits) {
  console.log(fruit);
}
// Output:
// apple
// banana
// orange

// 3. forEach() Method:
fruits.forEach(function(fruit) {
    console.log(fruit);
  });
  // Output:
  // apple
  // banana
  // orange

//   4. Map() Method:
let numbers = [1, 2, 3];
let doubledNumbers = numbers.map(function(number) {
    return number * 2;
  });
  
  console.log(doubledNumbers);
  // Output: [2, 4, 6]

//   5. Filter() Method:

let evenNumbers = numbers.filter(function(number) {
    return number % 2 === 0;
  });
  
  console.log(evenNumbers);
  // Output: [2, 4]

//   for (variable in object) {
//     // code to be executed
//   }

let fruit = ['apple', 'banana', 'orange'];

for (let index in fruit) {
  console.log(index); // Outputs the index (property) of the array
}
// Output:
// 0
// 1
// 2


// for (variable of iterable) {
//     // code to be executed
//   }
// 


for (let fruit of fruits) {
  console.log(fruit); // Outputs the value of each element in the array
}
// Output:
// apple
// banana
// orange
