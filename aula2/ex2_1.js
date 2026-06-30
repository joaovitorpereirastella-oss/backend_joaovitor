
const input = require('readline-sync');

function validarSenha(senha) {
    if (senha.length >= 8) {
        return true;
    }
    return false;
}
const senhaDigitada = input.question("Digite a sua senha: ");
if (validarSenha(senhaDigitada)) {
    console.log("Senha valida");
} else {
    console.log("Senha fraca – minimo 8 caracteres");
}
   
        