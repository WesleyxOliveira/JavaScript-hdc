// Crie uma regex que só aceite string terminadas com ID

// Depois teste

//Minha solução
const onlyId = /\d+ID/;

console.log(onlyId.test('123ID')); //true
console.log(onlyId.test('123')); //false
console.log(onlyId.test('testeID')); //false
console.log(onlyId.test('123ID')); //true



//Solução do professor
console.log("");

const validarId = /\d+ID\b/;

console.log(validarId.test('23454ID'));
console.log(validarId.test('234'));
console.log(validarId.test('asdf'));
console.log(validarId.test('asdfasdID'));
console.log(validarId.test('ID'));

