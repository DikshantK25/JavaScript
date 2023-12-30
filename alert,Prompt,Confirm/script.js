// In JavaScript, `prompt`, `alert`, and `confirm` are functions that allow interaction with users in the browser. Here's a brief overview of each:

// 1. **`prompt(message, default)`**
//    - Displays a dialog box that prompts the user for input.
//    - Returns the text entered by the user as a string.
//    - Example:

     let userInput = prompt('Enter your name:', 'John Doe');
     console.log('User entered:', userInput);

// 2. **`alert(message)`**
//    - Displays a dialog box with a specified message.
//    - It has only an "OK" button and is commonly used for showing information to the user.
//    - Example:

      alert('Hello, World!');


// 3. **`confirm(message)`**
//    - Displays a dialog box with a specified message and "OK" and "Cancel" buttons.
//    - Returns `true` if the user clicks "OK" and `false` if the user clicks "Cancel."
//    - Example:

     let userConfirmed = confirm('Do you want to proceed?');
     if (userConfirmed) {
       console.log('User clicked OK.');
     } else {
       console.log('User clicked Cancel.');
     }


