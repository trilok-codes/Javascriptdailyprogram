function isPalindrome(str) {
    
    return str === str.split('').reverse().join('');
}


const inputString = "level";
const result = isPalindrome(inputString);

if (result) {
    console.log(`"${inputString}" is a palindrome.`);
} else {
    console.log(`"${inputString}" is not a palindrome.`);
}