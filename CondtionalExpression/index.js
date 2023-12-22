// let userAgeString = prompt("How old are you?");
// let userAge = parseInt(userAgeString);

// // Now userAge is a number that can be used in mathematical operations
// console.log("You are " + userAge + " years old.");


// let userName = prompt("What is your name?");
// alert("Hello, " + userName + "!");

let numberString1 = "123";
let integerValue1= parseInt(numberString1);

console.log(integerValue1); // Outputs: 123


let numberString = "123";
let integerValue = parseInt(numberString);

console.log(integerValue); // Outputs: 123

console.log(typeof undefined);     // Outputs: "undefined"
console.log(typeof null);          // Outputs: "object" (typeof null is a historical quirk)
console.log(typeof function() {}); // Outputs: "function"
console.log(typeof []);            // Outputs: "object"
console.log(typeof {});            // Outputs: "object"


//if -else
let y = 3;

if (y > 5) {
  console.log("y is greater than 5");
} else {
  console.log("y is not greater than 5");
}


// //if - else if - else

// if (condition1) {
//     // Code to be executed if condition1 is true
//   } else if (condition2) {
//     // Code to be executed if condition2 is true
//   } else {
//     // Code to be executed if none of the conditions are true
//   }
  
//   //switch condition

//   switch (expression) {
//     case value1:
//       // Code to be executed if expression is equal to value1
//       break;
//     case value2:
//       // Code to be executed if expression is equal to value2
//       break;
//     // Add more cases as needed
//     default:
//       // Code to be executed if none of the cases match
//   }

let day = "Monday";

switch (day) {
  case "Monday":
    console.log("It's the start of the week.");
    break;
  case "Tuesday":
  case "Wednesday":
  case "Thursday":
    console.log("It's a weekday.");
    break;
  case "Friday":
    console.log("It's Friday, time to relax!");
    break;
  case "Saturday":
  case "Sunday":
    console.log("It's the weekend!");
    break;
  default:
    console.log("Not a valid day.");
}



// condition ? expressionIfTrue : expressionIfFalse;

let isRaining = true;

let weather = isRaining ? "Bring an umbrella" : "Enjoy the sunshine";

console.log(weather); // Outputs: "Bring an umbrella"
