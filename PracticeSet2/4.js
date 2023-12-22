function isDivisibleBy2Or3(number) {
    if (number % 2 === 0) {
      return true; // divisible by 2
    } else if (number % 3 === 0) {
      return true; // divisible by 3
    } else {
      return false; // not divisible by either 2 or 3
    }
  }
  
  // Example usage:
  let num1 = 6;
  let num2 = 5;
  let num3 = 9;
  
  console.log(`${num1} is divisible by 2 or 3: ${isDivisibleBy2Or3(num1)}`);
  console.log(`${num2} is divisible by 2 or 3: ${isDivisibleBy2Or3(num2)}`);
  console.log(`${num3} is divisible by 2 or 3: ${isDivisibleBy2Or3(num3)}`);
  