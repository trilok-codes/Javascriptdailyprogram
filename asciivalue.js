function getAsciiValue(character) {

    const asciiValue = character.charCodeAt(0);
    return asciiValue;
}
const inputCharacter = 'A';
const asciiValue = getAsciiValue(inputCharacter);

console.log(`ASCII value of ${inputCharacter} is: ${asciiValue}`);