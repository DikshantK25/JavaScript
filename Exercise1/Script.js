//this code will run in chrome console only
// Generate a random integer between 1 and 100
function getRandomNumber() {
    return Math.floor(Math.random() * 100) + 1;
  }
  
  // Example: Generate a random number between 1 and 100
  const randomNumber = getRandomNumber();
  console.log(randomNumber);
  
  let chances = 0;
  
  function guessNumber(value) {
    if (value == randomNumber) {
      console.log("Your guess is correct, and your score is " + (100 - chances));
      return true; // User guessed correctly, exit the loop
    } else if (value > randomNumber) {
      console.log("Your guess is greater than the actual number");
    } else if (value < randomNumber) {
      console.log("Your guess is lower than the actual number");
    }
    return false; // User didn't guess correctly, continue the loop
  }
  
  // Keep prompting the user until they guess correctly
  while (true) {
    let userGuess = prompt("Enter your guess between 1 and 100:");
    chances++;
    if (guessNumber(parseInt(userGuess, 10))) {
      break; // Exit the loop if the user guessed correctly
    }
  }
  