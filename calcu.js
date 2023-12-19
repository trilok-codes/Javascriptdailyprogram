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

const result = parseInt(prompt('Enter the digit: '));

switch (result) {
  case 1:
    Add();
    break;
  case 2:
    Sub();
    break;
  case 3:
    Mul();
    break;
  case 4:
    Div();
    break;
  default:
    console.log('Invalid operator');
}
