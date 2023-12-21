function sumOfNaturalNumbers(n) {
    if (n <= 0) {
      return 0; // Base case: if n is less than or equal to 0, return 0
    } else {
      return n + sumOfNaturalNumbers(n - 1); // Recursive case: n + sum of (n-1)
    }
  }
  
  // Example usage:
  const prompt =require('prompt-sync')();
  const userInput = parseInt(prompt('Enter the limit: ')); // You can replace this with any positive integer
  const result = sumOfNaturalNumbers(userInput);
  
  console.log(`The sum of the first ${userInput} natural numbers is: ${result}`);
  