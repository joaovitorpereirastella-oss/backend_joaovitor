const input = require("readline-sync");

    let tempcel = input.questionInt("digite a temperatura em Celsius: ")

    let tempfar = tempcel * 1.8 + 32

    console.log(`A temperatura em Fahrenheit é: ${tempfar}°F`)