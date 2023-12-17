const prompt =require('prompt-sync')();
const num1 = parseInt(prompt('Enter the limit: '));
const num2 = parseInt(prompt('Enter the limit: '));

function gcd(a, b) { 
    for (let temp = b; b !== 0;) { 
        b = a % b; 
        a = temp; 
        temp = b; 
    } 
    return a; 
} 
  
function lcmFunction(a, b) { 
    const gcdValue = gcd(a, b); 
    return (a * b) / gcdValue; 
} 
  

let lcm = lcmFunction(num1, num2); 
console.log("LCM of given numbers is :", lcm);