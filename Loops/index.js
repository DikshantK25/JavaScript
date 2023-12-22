//for loop

// for (initialization; condition; increment/decrement) {
//     // Code to be executed in each iteration
//   }
  
  for (let i = 1; i <= 5; i++) {
    console.log(i);
  }


  //while loop
//   while (condition) {
//     // Code to be executed as long as the condition is true
//   }
console.log("********************************");
  let i = 1;

while (i <= 5) {
  console.log(i);
  i++;
}

  //do-while
//   do {
//     // Code to be executed
//   } while (condition);
  
console.log("********************************");
let i1 = 1;

do {
  console.log(i1);
  i1++;
} while (i1 <= 5);

console.log("********************************");
// for (variable of iterable) {
//     // Code to be executed in each iteration
//   }
let colors = ['red', 'green', 'blue'];

for (let color of colors) {
  console.log(color);
}


console.log("********************************");
// for (variable in object) {
//     // Code to be executed in each iteration
//   }

let person = {
    name: 'John',
    age: 30,
    city: 'New York'
  };
  
  for (let key in person) {
    console.log(`${key}: ${person[key]}`);
  }
  
  