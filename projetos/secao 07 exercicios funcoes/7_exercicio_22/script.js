/*
Minha solução

function numeroAbsoluto(n) {
    return Math.abs(n);
}

console.log(numeroAbsoluto(-10));

*/

//Solução do professor

function numeroPos(numeroNegativo) {
    return Math.abs(numeroNegativo);
}

console.log(numeroPos(-20)); // retorna 20 positivo
console.log(numeroPos(4)); // retorna 4 pois já é positivo
console.log(numeroPos(-10.2)); // retorna 10.2 positivo
console.log(Math.floor(numeroPos(-70.7))); // retorna 70 posivito arredondado para baixo.
console.log(Math.ceil(numeroPos(-70.7))); // retorna 70 positivo arredondado para cima