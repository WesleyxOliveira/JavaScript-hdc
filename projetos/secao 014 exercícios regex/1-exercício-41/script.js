// Crie uma regex que aceite só letras maiúsculas
// Depois teste


// Minha solução
const uppercaseLetter = /[A-Z]/;

console.log(uppercaseLetter.test('a')); // false
console.log(uppercaseLetter.test('A')); // true
console.log(uppercaseLetter.test('asdf')); // false
console.log(uppercaseLetter.test('asdfA')); // true



// Do professor
console.log("");

const validarMaiúscula = /[A-Z]/;

console.log(validarMaiúscula.test('testando'));
console.log(validarMaiúscula.test('123'));
console.log(validarMaiúscula.test('TESTANDO'));