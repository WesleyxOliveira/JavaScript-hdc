const dia = /\d\d/;

console.log(dia.test("2019") && "2019".length == 2);
console.log(dia.test("asdf"));
console.log(dia.test("05") && "05".length == 2);
console.log(dia.test("asdf23") && "asdf23".length == 2);

console.log("");

const palavaTresLetras = /\w\w\w/;

console.log("Palavra três Letras")
console.log(palavaTresLetras.test("asd"));
console.log(palavaTresLetras.test("asdd"));
console.log(palavaTresLetras.test("as"));
console.log(palavaTresLetras.test("Wesley") && "Wesley".length == 3);