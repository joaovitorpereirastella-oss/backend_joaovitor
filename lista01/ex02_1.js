const input = require("readline-sync");

    let base = input.questionInt("digite o numero da tabuada: ")

    let altura = input.questionInt("digite o numero da tabuada: ")

    const area = base * altura

    const perimetro = 2 * (base + altura)

    console.log(`A area do retangulo é: ${area}`)
    console.log(`O perimetro do retangulo é: ${perimetro}`)