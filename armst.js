function isArmstrongNumber(number) {
    // Convert the number to a string to find its length
    const numStr = String(number);
    const numDigits = numStr.length;

    // Calculate the sum of each digit raised to the power of the number of digits
    const armstrongSum = numStr.split('').reduce((sum, digit) => {
        return sum + Math.pow(parseInt(digit), numDigits);
    }, 0);

    // Check if the sum is equal to the original number
    return armstrongSum === number;
}

// Example usage:
const prompt =require('prompt-sync')();
const numToCheck = parseInt(prompt("Enter a number to check for Armstrong property:"));
if (isArmstrongNumber(numToCheck)) {
    console.log(`${numToCheck} is an Armstrong number.`);
} else {
    console.log(`${numToCheck} is not an Armstrong number.`);
}