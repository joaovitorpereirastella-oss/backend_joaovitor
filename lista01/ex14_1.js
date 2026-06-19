const readline = require('readline-sync');

function reverter(array) {
    const arrayinvert = [];
    
    for (let i = array.length - 1; i >= 0; i--) {
        arrayinvert.push(array[i]);
    }
    
    return arrayinvert;
}

const entrada = readline.question('digite os numeros do array (separe com virgulas): ');

const meuArray = entrada.split(',').map(item => item.trim());

if (entrada.trim() === "") {
    console.log(" o array está vazio.");
} else {
    console.log(`\narray: [${meuArray.join(', ')}]`);
    
    const resultado = reverter(meuArray);
    
    console.log(`array invertido: [${resultado.join(', ')}]`);
}