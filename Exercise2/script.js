//you should run on console this program


function getUserChoice() {
    // Prompt the user for their choice
    const userChoice = prompt("Enter your choice: Snake, Water, or Gun").toLowerCase();
  
    // Validate the user's choice
    if (userChoice !== 'snake' && userChoice !== 'water' && userChoice !== 'gun') {
      console.log("Invalid choice. Please enter Snake, Water, or Gun.");
      return getUserChoice(); // Ask the user again for a valid choice
    }
  
    return userChoice;
  }
  
  function getComputerChoice() {
    // Generate a random number (0, 1, or 2)
    const randomNum = Math.floor(Math.random() * 3);
  
    // Map the random number to a choice (0: Snake, 1: Water, 2: Gun)
    const choices = ['snake', 'water', 'gun'];
    return choices[randomNum];
  }
  
  function determineWinner(userChoice, computerChoice) {
    if (userChoice === computerChoice) {
      return "It's a tie!";
    }
  
    if (
      (userChoice === 'snake' && computerChoice === 'water') ||
      (userChoice === 'water' && computerChoice === 'gun') ||
      (userChoice === 'gun' && computerChoice === 'snake')
    ) {
      return 'You win!';
    } else {
      return 'Computer wins!';
    }
  }
  
  function playGame() {
    const userChoice = getUserChoice();
    const computerChoice = getComputerChoice();
  
    console.log(`Your choice: ${userChoice}`);
    console.log(`Computer's choice: ${computerChoice}`);
  
    const result = determineWinner(userChoice, computerChoice);
    console.log(result);
  }
  
  // Play the game
  playGame();
  