function arr(num) {
    // Split the string into an array of characters
    let numbArray = num.split("");
    
    // Reverse the array
    numbArray.reverse();
    
    // Join the array back into a string
    let reversedNum = numbArray.join("");
    
    // Return the reversed string
    return reversedNum;
}

function print(numb) {
    console.log(numb);
}

const numb = "98765";
const reversedNumb = arr(numb); // Call the function and store the result in a variable
print(reversedNumb); // Print the reversed string
