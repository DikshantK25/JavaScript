function checkDrivingEligibility(age) {
    const drivingAge = 18;
  
    if (age >= drivingAge) {
      console.log("You are eligible to drive. Happy driving!");
    } else {
      console.log(`Sorry, you are not eligible to drive. You need to be at least ${drivingAge} years old.`);
    }
  }
  
  // Example usage:
  let person1Age = 20;
  let person2Age = 16;
  
  checkDrivingEligibility(person1Age);
  checkDrivingEligibility(person2Age);
  