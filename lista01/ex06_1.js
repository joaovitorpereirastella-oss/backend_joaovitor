const input = require('readline-sync');

const inicio = input.questionInt(readlineSync.question('digite um numero para a contagem: '));

console.log("\niniciando contagem...");

for (let i = inicio; i >= 1; i--) {
  console.log(i);
}
console.log("Fim!");