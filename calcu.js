const prompt = require('prompt-sync')();

function Add() {
  const a = parseInt(prompt('Enter the first digit: '));
  const b = parseInt(prompt('Enter the second digit:'));
  const sum = a + b;
  console.log(sum);
}

function Sub() {
  const a = parseInt(prompt('Enter the first digit: '));
  const b = parseInt(prompt('Enter the second digit:'));
  const sum = a - b;
  console.log(sum);
}

function Mul() {
  const a = parseInt(prompt('Enter the first digit: '));
  const b = parseInt(prompt('Enter the second digit:'));
  const sum = a * b;
  console.log(sum);
}

function Div() {
  const a = parseInt(prompt('Enter the first digit: '));
  const b = parseInt(prompt('Enter the second digit:'));
  const sum = a / b;
  console.log(sum);
}

const result = (prompt('Enter the digit: '));

switch (result) {
  case "a":
    Add();
    break;
  case "b":
    Sub();
    break;
  case "c":
    Mul();
    break;
  case "d":
    Div();
    break;
  default:
    console.log('Invalid operator');
}
