const input = require("readline-sync");

    let numero = input.questionInt("digite um numero: ");

  const resultado = (numero % 2 === 0) ? "par" : "impar";
  
  console.log(`O número ${numero} é ${resultado}.`);