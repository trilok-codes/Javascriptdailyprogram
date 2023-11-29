// function sumNaturalNumbers(limit) {
//     let sum = 0;
//     for (let i = 1; i <= limit; i++) {
//       sum += i;
//     }
//     return sum;
//   }
  const prompt =require('prompt-sync')();
  // Get input from the user
  const limit = parseInt(prompt('Enter the limit: '));
  let sum = 0;
    for (let i = 1; i <= limit; i++) {
      sum += i;
    }
  
  // Calculate the sum
  //const totalSum = sumNaturalNumbers(limit);
  
  // Display the result
  console.log(`The sum of natural numbers up to ${limit} is: ${sum}`);