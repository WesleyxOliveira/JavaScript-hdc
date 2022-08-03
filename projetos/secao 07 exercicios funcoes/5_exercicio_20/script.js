/*
Miha solução

let idade = 14;

let verificadorDeIdade = function(age) {
    if (age >= 18) {
        return true;
    } else {
        return false;
    }
}

if (verificadorDeIdade(idade)) {
    console.log("Você tem " + idade + ". Pode entrar!");
} else {
    console.log("Você têm " + idade + ". Não pode entrar!");
}
*/

function podeEntrarNaAuto(idade) {
    if (idade >= 18) {
        console.log("Pode se matricular na auto escola.")
    } else {
        console.log("Não pode se matricular na auto escola.")
    }
}

podeEntrarNaAuto(19);
podeEntrarNaAuto(12);
podeEntrarNaAuto(25);