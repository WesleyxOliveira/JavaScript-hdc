const umOuMaisNumeros = /\d+/;

console.log(umOuMaisNumeros.test("1234")); 
console.log(umOuMaisNumeros.test("1")); 
console.log(umOuMaisNumeros.test("asdf")); 
console.log(umOuMaisNumeros.test(" "));