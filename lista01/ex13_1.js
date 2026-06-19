const input = require('readline-sync');

const range = (inicio, fim) => Array.from({ length: fim - inicio + 1 }, (_, i) => inicio + i);

const soma = (array) => array.reduce((total, num) => total + num, 0);

const inicio = input.questionInt('Digite o numero inicial: ');
const fim = input.questionInt('Digite o numero final: ');

if (inicio > fim) {
    console.log("o numero inicial deve ser menor que o final");
} else {
    const numeros = range(inicio, fim);
    
    console.log(`\narray: [${numeros.join(', ')}]`);
    console.log(`a soma dos elementos é
        : ${soma(numeros)}`);
}