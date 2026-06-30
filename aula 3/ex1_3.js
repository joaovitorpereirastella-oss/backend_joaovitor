const input = require('readline-sync');

const aluno = {
    nome: "João Vítor Pereira stella",
    idade: 16,
    cidade: "Cascavel",
    curso: "Desenvolvimento de Sistemas"
};

console.log("Ficha Inicial do Aluno ");
console.log(`Nome: ${aluno.nome}`);
console.log(`Idade: ${aluno.idade} anos`);
console.log(`Cidade: ${aluno.cidade}`);
console.log(`Curso: ${aluno.curso}`);

const novaCidade = input.question("\nDigite a nova cidade: ");
aluno.cidade = novaCidade;

console.log("\nFicha Atualizada do Aluno");
console.log(`Cidade Atualizada: ${aluno.cidade}`);