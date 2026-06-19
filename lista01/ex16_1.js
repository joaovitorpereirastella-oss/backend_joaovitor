// Criando o array de alunos
const alunos = [
  { nome: "Ana", nota: 8.5 },
  { nome: "Bruno", nota: 6.0 },
  { nome: "Carlos", nota: 7.2 },
  { nome: "Diana", nota: 4.5 },
  { nome: "Eduardo", nota: 9.0 }
];

// --- RESOLUÇÃO DO DESAFIO ---

// 1. Usando .map() para adicionar a propriedade 'situacao'
const alunosComSituacao = alunos.map(aluno => {
  return {
    ...aluno, // Mantém o nome e a nota originais
    situacao: aluno.nota >= 7 ? "Aprovado" : "Reprovado"
  };
});

console.log("--- Lista de Alunos com Situação ---");
console.log(alunosComSituacao);

// 2. Usando .filter() para contar os aprovados
const aprovados = alunosComSituacao.filter(aluno => aluno.situacao === "Aprovado");
const quantidadeAprovados = aprovados.length;

console.log(`\nQuantidade de alunos aprovados: ${quantidadeAprovados}`);

// 3. Calculando a média geral da turma
// O .reduce() soma todas as notas do array original
const somaNotas = alunos.reduce((acumulador, aluno) => acumulador + aluno.nota, 0);
const mediaGeral = somaNotas / alunos.length;

console.log(`Média geral da turma: ${mediaGeral.toFixed(1)}`);