let a = 45;
let b = 5;
//Arithmetic
console.log(a + b);   // Addition: 45 + 5 = 50
console.log(a - b);   // Subtraction: 45 - 5 = 40
console.log(a * b);   // Multiplication: 45 * 5 = 225
console.log(a / b);   // Division: 45 / 5 = 9
console.log(a % b);   // Modulus (remainder): 45 % 5 = 0
console.log(a ** b);  // Exponentiation: 45 to the power of 5 = 184528125000000

console.log(a++);     // Post-increment: Prints the current value of 'a' (45) and then increments it by 1
console.log(++a);     // Pre-increment: Increments 'a' by 1 and then prints the updated value (47)
console.log(--a);     // Pre-decrement: Decrements 'a' by 1 and then prints the updated value (46)
console.log(a--);     // Post-decrement: Prints the current value of 'a' (46) and then decrements it by 1

//Assignments Operators

console.log(a += b);   // Addition Assignment: a = a + b (45 + 5 = 50)
console.log(a -= b);   // Subtraction Assignment: a = a - b (50 - 5 = 45)
console.log(a *= b);   // Multiplication Assignment: a = a * b (45 * 5 = 225)
console.log(a /= b);   // Division Assignment: a = a / b (225 / 5 = 45)
console.log(a %= b);   // Modulus Assignment: a = a % b (45 % 5 = 0)
console.log(a **= b);  // Exponentiation Assignment: a = a ** b (0 ** 5 = 0)


//Comparision Operators

console.log(a === b); // Strict Equality: false (45 is not strictly equal to 5)
console.log(a !== b); // Strict Inequality: true (45 is not strictly equal to 5)
console.log(a > b);   // Greater Than: true (45 is greater than 5)
console.log(a < b);   // Less Than: false (45 is not less than 5)
console.log(a >= b);  // Greater Than or Equal: true (45 is greater than or equal to 5)
console.log(a <= b);  // Less Than or Equal: false (45 is not less than or equal to 5)

//logical Operators
console.log(a > 0 && b > 0);  // Logical AND: true (both a and b are greater than 0)
console.log(a > 0 || b > 0);  // Logical OR: true (at least one of a or b is greater than 0)
console.log(!(a > 0));        // Logical NOT: false (a is greater than 0, but NOT true)
console.log(a && b);          // Short-circuit AND: 5 (returns the second operand if the first is truthy)
console.log(a || b);          // Short-circuit OR: 45 (returns the first operand if it's truthy)

// Bitwise Operators
console.log(a & b);   // Bitwise AND: 5 (00101101 & 00000101 = 00000101)
console.log(a | b);   // Bitwise OR: 45 (00101101 | 00000101 = 00101101)
console.log(a ^ b);   // Bitwise XOR: 40 (00101101 ^ 00000101 = 00101000)
console.log(~a);      // Bitwise NOT: -46 (inverts all bits)
console.log(a << 2);  // Left Shift: 180 (shifts binary representation of 45 two positions to the left)
console.log(a >> 2);  // Right Shift: 11 (shifts binary representation of 45 two positions to the right)
console.log(a >>> 2); // Unsigned Right Shift: 11 (shifts binary representation of 45 two positions to the right, filling with zeros)

/*
  This is a multiline comment.
  It can span multiple lines.
  Comments are useful for explaining code or temporarily disabling parts of code.
*/

console.log("Hello, World!");

/*
  The following code is commented out:
  console.log("This won't be executed");
*/
