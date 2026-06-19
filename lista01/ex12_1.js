const input = require('readline-sync');

function calcular(a, b, operacao) {
    return operacao(a, b);
}

console.log("calculadora com callback");

const num1 = input.questionFloat('digite o primeiro numero: ');
const num2 = input.questionFloat('digite o segundo numero: ');

console.log("\nResultados: ");

const soma = calcular(num1, num2, (x, y) => x + y);
const sub = calcular(num1, num2, (x, y) => x - y);
const mult = calcular(num1, num2, (x, y) => x * y);

console.log(`${num1} + ${num2} = ${soma}`);
console.log(`${num1} - ${num2} = ${sub}`);
console.log(`${num1} * ${num2} = ${mult}`);