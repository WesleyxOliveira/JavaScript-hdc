//Crie uma regex que aceite a seguinte expressão "Marca: nomeDaMarca"

//Onde nomeDaMarca pode variar de Nike, Adidas, Puma, Asics

// Depois teste

const brand = /Marca: (Nike|Adidas|Puma|Asics)/;

console.log(brand.test('Marca: Nike'));
console.log(brand.test('Marca: asdf'));
console.log(brand.test('Marca: '));
console.log(brand.test('Marca: 123'));
console.log(brand.test('Marca: Puma'));
console.log(brand.test('Umbro'));
console.log(brand.test('123456'));