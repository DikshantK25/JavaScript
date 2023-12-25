let fruits = ["apple", "banana"];
fruits.push("orange", "kiwi");
console.log(fruits); // Output: ["apple", "banana", "orange", "kiwi"]

fruits.unshift("apple", "kiwi");
console.log(fruits); // Output: ["apple", "kiwi", "banana", "orange"]

let firstFruit = fruits.shift();

console.log(firstFruit); // Output: "apple"
console.log(fruits); 
fruits.splice(2, 1, "grape", "cherry");
console.log(fruits);
// Output: ["apple", "kiwi", "grape", "cherry", "orange"]

let numbers = [1, 2, 3, 4, 5];
let slicedNumbers = numbers.slice(1, 4);
console.log(slicedNumbers); // Output: [2, 3, 4]

let fruits1 = ["apple", "kiwi"];
let fruits2 = ["banana", "orange"];
let combinedFruits = fruits1.concat(fruits2);
console.log(combinedFruits);
// Output: ["apple", "kiwi", "banana", "orange"]


let fruit1 = ["apple", "kiwi", "banana", "orange"];
let includesBanana = fruit1.includes("banana");
console.log(includesBanana); // Output: true


let number = [1, 2, 3];
number.forEach((num) => {
  console.log(num * 2);
});
// Output:
// 2
// 4
// 6


let fruit = ["apple", "banana", "orange"];

// Using the default separator (comma)
let result1 = fruit.join();
console.log(result1);
// Output: "apple,banana,orange"

// Using a custom separator (hyphen)
let result2 = fruit.join("-");
console.log(result2);
// Output: "apple-banana-orange"

// Using a custom separator (space)
let result3 = fruit.join(" ");
console.log(result3);
// Output: "apple banana orange"


let str=fruit.toString();//arrays to string
console.log(str);
