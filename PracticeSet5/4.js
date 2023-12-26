function calculateFactorial(number) {
    // Check for negative input
    if (number < 0) {
      return "Factorial is undefined for negative numbers.";
    }
  
    // Base case: factorial of 0 is 1
    if (number === 0) {
      return 1;
    }
  
    // Use reduce to calculate the factorial
    const factorial = Array.from({ length: number }, (_, index) => index + 1)
      .reduce((accumulator, currentValue) => accumulator * currentValue, 1);
  
    return factorial;
  }
  
  // Example usage
  const result = calculateFactorial(5);
  console.log(result); // Output: 120
  