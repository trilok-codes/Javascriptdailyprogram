function decimalToBinary(decimal) {
    // Check if the input is a valid number
    if (isNaN(decimal) || decimal < 0 || Math.floor(decimal) !== decimal) {
        return "Invalid input. Please enter a non-negative integer.";
    }

    // Special case for zero
    if (decimal === 0) {
        return "0";
    }

    let binary = "";
    while (decimal > 0) {
        // Append the remainder of the division to the binary representation
        binary = (decimal % 2) + binary;
        // Integer division by 2 to move to the next bit
        decimal = Math.floor(decimal / 2);
    }

    return binary;
}

// Example usage:

// Case 1: Decimal = 25
const decimalNumber = 25;
const binaryRepresentation = decimalToBinary(decimalNumber);
console.log(`Binary representation of ${decimalNumber} is: ${binaryRepresentation}`);
// Output: Binary representation of 25 is: 11001
  