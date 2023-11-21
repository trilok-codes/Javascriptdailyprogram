let numberToCheck = 13; // Change this to any number you want to check


if (numberToCheck < 2) {
  console.log(`${numberToCheck} is not a prime number.`);
} else {
  
  let isPrime = true;
  for (let i = 2; i <= Math.sqrt(numberToCheck); i++) {
    if (numberToCheck % i === 0) {
      // If the number is divisible by any number in this range, it's not prime
      isPrime = false;
      break;
    }
  }

  // Output the result
  if (isPrime) {
    console.log(`${numberToCheck} is a prime number.`);
  } else {
    console.log(`${numberToCheck} is not a prime number.`);
  }
}







