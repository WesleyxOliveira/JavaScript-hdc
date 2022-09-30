const padrao = /Abacax?i/;

console.log(padrao.test('Abacaxi'));
console.log(padrao.test('Abacai'));
console.log("");

const padrao2 = /\d+\w?/; // Aceita número indefinido de digitos e tbm letras.

console.log(padrao2.test('123')); //true
console.log(padrao2.test('123asdf')); // true
console.log(padrao2.test('123 ')); //true