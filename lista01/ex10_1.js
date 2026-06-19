const readlineSync = require('readline-sync');

function contarLetra(texto, letra) {
  let contador = 0;

  for (let i = 0; i < texto.length; i++) {
    if (texto[i] === letra) {
      contador++;
    }
  }

  return contador;
}

const textoUsuario = readlineSync.question('Digite um texto ou palavra: ');
const letraUsuario = readlineSync.question('Digite a letra que deseja contar: ');

if (letraUsuario.length !== 1) {
  console.log("Por favor, digite exatamente uma letra para a busca.");
} else {
  const resultado = contarLetra(textoUsuario, letraUsuario);
  console.log(`A letra "${letraUsuario}" aparece ${resultado} vez(es) no texto.`);
}