const cep = /\d{5}-\d{3}/;

console.log(cep.test('75980-690'));
console.log(cep.test('asdf'));
console.log(cep.test('881-50'));
console.log(cep.test('88144-503'));
console.log("");

const tel = /\(\d{2}\)\d{4,5}-\d{4}/;

console.log(tel.test('(48)99999-9999'));
console.log(tel.test('(48)55555-9999'));