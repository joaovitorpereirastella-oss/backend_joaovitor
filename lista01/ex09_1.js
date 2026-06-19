const input = require('readline-sync');

const a = input.questionInt('digite o primeiro numero: ');
const b = input.questionInt('digite o segundo numero:  ');

function min(a, b) {
  if (a < b) {
    return a;
  } else {
    return b;
  }
}

console.log(`o menor numero digitado foi: ${min(a, b)}`);