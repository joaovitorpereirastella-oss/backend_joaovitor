const input = require('readline-sync');

const a = input.questionInt("Digite o primeiro numero: ");
const b = input.questionInt("Digite o segundo numero: ");

const somar = (a, b) => a + b;
const subtrair = (a, b) => a - b;
const multiplicar = (a, b) => a * b;

const dividir = (a, b) => {
    if (b === 0) {
        return "Erro: divisao por zero";
    }
    return a / b;
};

console.log(`\nResultados para ${a} e ${b}:`);
console.log(`Soma: ${somar(a, b)}`);
console.log(`Subtração: ${subtrair(a, b)}`);
console.log(`Multiplicação: ${multiplicar(a, b)}`);
console.log(`Divisão: ${dividir(a, b)}`);