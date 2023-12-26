function fibonacci(n) {
    if (n <= 0) {
      return "Invalid input. Please enter a positive integer.";
    } else if (n === 1) {
      return 0;
    } else if (n === 2) {
      return 1;
    } else {
      return fibonacci(n - 1) + fibonacci(n - 2);
    }
  }
  
  function displayFibonacciSequence(n) {
    if (n <= 0) {
      console.log("Invalid input. Please enter a positive integer.");
    } else {
      console.log("Fibonacci Sequence:");
      for (let i = 1; i <= n; i++) {
        console.log(fibonacci(i));
      }
    }
  }
  
  // Get user input
  const numTerms = parseInt(prompt("Enter the number of terms for the Fibonacci sequence:"));
  
  if (!isNaN(numTerms)) {
    displayFibonacciSequence(numTerms);
  } else {
    console.log("Invalid input. Please enter a valid integer.");
  }
  