// function functionName(parameters) {
//     // Code to be executed
//     return result; // Optional
//   }

function greet1(name) {
    return `Hello, ${name}!`;
  }
  
  let greeting = greet1("John");
  console.log(greeting); // Output: Hello, John!
  
  console.log("********************************");


  function add(a, b) {
    return a + b;
  }
  
  let result = add(3, 5);
  console.log(result); // Output: 8
  
  
  console.log("********************************");

  function power(base, exponent = 2) {
    return Math.pow(base, exponent);
  }
  
  let result1 = power(3); // Uses default exponent (2)
  let result2 = power(3, 4); // Uses provided exponent (4)
  
  console.log(result2); // Output: 81
  console.log(result1); // Output: 9

   
  console.log("********************************"); 

  
  // Arrow function equivalent
  const multiply = (a, b) => {
    const result = a * b;
    return result;
  };
  
  // Arrow function with implicit return
  const square = (x) => x * x;
  
  // Arrow function with no parameters
  const greet = () => console.log("Hello!");
  
  // Arrow function with one parameter and implicit return
  const double = (num) => num * 2;
  
  // Arrow function with multiple parameters and implicit return
  const sum = (a, b) => a + b;


  
  
  console.log("********************************"); 
  
  //callback function
  // Example of a function with a callback
function fetchData(url, callback) {
    // Simulating an asynchronous operation (e.g., an HTTP request)
    setTimeout(() => {
      const data = { message: "Data fetched successfully!" };
      // Call the callback function and pass the data
      callback(data);
    }, 1000);
  }
  
  // Callback function
  function processFetchedData(data) {
    console.log("Processing data:", data.message);
  }
  
  // Call fetchData and provide processFetchedData as the callback
  fetchData("https://example.com/api/data", processFetchedData);
  
  