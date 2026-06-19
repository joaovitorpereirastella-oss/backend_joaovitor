const input = require('readline-sync');

function podeVotar(idade) {
  return idade >= 16;
}

const idadeUsuario = input.questionInt('digite a sua idade: ');

if (podeVotar(idadeUsuario)) {
  console.log("Você pode votar");
} else {
  console.log("você não pode votar");
}