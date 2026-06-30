
const input = require('readline-sync');

function executarOperacao(a, b, operacao) {
    const resultado = operacao(a, b);
    console.log(resultado);
}

const a = input.questionInt("Digite o primeiro numero: ");
const b = input.questionInt("Digite o segundo numero: ");

console.log("Soma: ");
executarOperacao(a, b, (a, b) => a + b);

console.log("Multiplicacao: ");
executarOperacao(a, b, (a, b) => a * b);

console.log("Subtracao: ");
executarOperacao(a, b, (a, b) => a - b);


executarOperacao(10, 3, (a, b) => a + b);
executarOperacao(10, 3, (a, b) => a * b);
executarOperacao(10, 3, (a, b) => a - b);