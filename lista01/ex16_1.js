const alunos = [
  { nome: "Ana", nota: 8.5 },
  { nome: "Bruno", nota: 6.0 },
  { nome: "Carlos", nota: 7.2 },
  { nome: "Diana", nota: 4.5 },
  { nome: "Eduardo", nota: 9.0 }
];

const alunosComSituacao = alunos.map(aluno => {
  return {
    ...aluno,
    situacao: aluno.nota >= 7 ? "Aprovado" : "Reprovado"
  };
});

console.log("--- Lista de Alunos com Situação ---");
console.log(alunosComSituacao);

const aprovados = alunosComSituacao.filter(aluno => aluno.situacao === "Aprovado");
const quantidadeAprovados = aprovados.length;

console.log(`\nQuantidade de alunos aprovados: ${quantidadeAprovados}`);

const somaNotas = alunos.reduce((acumulador, aluno) => acumulador + aluno.nota, 0);
const mediaGeral = somaNotas / alunos.length;

console.log(`Média geral da turma: ${mediaGeral.toFixed(1)}`);
