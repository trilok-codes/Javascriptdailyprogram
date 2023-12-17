const prompt =require('prompt-sync')();
const num1 = parseInt(prompt('Enter the limit: '));
function findFactors(number) {
    // Initialize an array to store factors
    let factors = [];

    // Iterate from 1 to the given number
    for (let i = 1; i <= number; i++) {
        // If 'i' is a factor (divides 'number' without remainder), add it to the array
        if (number % i === 0) {
            factors.push(i);
        }
    }

    return factors;
}

// Example: Find factors of a number (e.g., 12)

let resultFactors = findFactors(num1);

console.log(`Factors of ${num1}:`, resultFactors);
