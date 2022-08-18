/*
O método join() junta todos os elementos de um array (ou um array-like object) em uma string e retorna esta string.
*/

let frase = "Testando o método split";

let palavras = frase.split(" ");

console.log(palavras);

let novaFrase = palavras.join("@");

console.log(novaFrase);


// Outros exemplos

const elementos = ['Fire', 'Air', 'Water'];

console.log(elementos.join(",")); 
console.log(elementos.join(""));
console.log(elementos.join("-"));
