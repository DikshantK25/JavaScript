let name1= "diskant";
console.log(name1.length);
console.log(name1[0]);


console.log("********************************");


let name = "John";
let greeting = `Hello, ${name}!`;
console.log(greeting); // Output: Hello, John!


// String interpolation
let firstName = "Alice";
let lastName = "Smith";
let fullName = `Full Name: ${firstName} ${lastName}`;
console.log(fullName);
 // Output: Full Name: Alice Smith

// Multiline strings
let multilineString = `
  This is a
  multiline
  string.`;
console.log(multilineString);


/*
  Output:
  This is a
  multiline
  string.
*/

// Expressions in template literals
let x = 5;
let y = 10;
let sum = `The sum of ${x} and ${y} is ${x + y}`;
console.log(sum); 
// Output: The sum of 5 and 10 is 15


console.log("********************************");

console.log("Hello\nWorld");
// Output:
// Hello
// World


console.log("Name\tAge");
// Output:
// Name    Age


console.log("Hello\rWorld");
// Output: Worldlo


console.log("This is a backslash: \\");
// Output: This is a backslash: \


console.log('Single quote: \'');
console.log("Double quote: \"");
// Output:
// Single quote: '
// Double quote: "
