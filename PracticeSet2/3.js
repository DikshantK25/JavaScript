function isDivisibleBy2And3(number) {
    return number % 2 === 0 && number % 3 === 0;
  }
  
  // Example usage:
  let num1 = 6;
  let num2 = 10;
  let num3 = 15;
  
  console.log(`${num1} is divisible by 2 and 3: ${isDivisibleBy2And3(num1)}`);
  console.log(`${num2} is divisible by 2 and 3: ${isDivisibleBy2And3(num2)}`);
  console.log(`${num3} is divisible by 2 and 3: ${isDivisibleBy2And3(num3)}`);
  