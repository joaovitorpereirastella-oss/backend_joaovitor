let soma = 0;

// Laço para percorrer os números de 1 a 50
for (let i = 1; i <= 50; i++) {
  // Verifica se o número atual é par
  if (i % 2 === 0) {
    soma += i; // Adiciona o número par ao total acumulado
  }
}

// Exibe o resultado final
console.log(`A soma de todos os números pares de 1 a 50 é: ${soma}`);