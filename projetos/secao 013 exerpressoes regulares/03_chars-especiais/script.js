const pontoRegex = /./;
/*
    Aceita tudo
*/
console.log(".")
console.log(pontoRegex.test("asd"));
console.log(pontoRegex.test(" "));
console.log(pontoRegex.test("123"));
console.log(pontoRegex.test("123asdf"));

console.log(" ")

const dRegex = /\d/; // o mesmo que [0-9];

/* Aceita todos os números */

console.log("d");
console.log(dRegex.test("asd")); // => false
console.log(dRegex.test(" ")); // => false
console.log(dRegex.test("123")); // => true
console.log(dRegex.test("123asdf")); // => true

console.log(" ");

const dRegex2 = /\D/; // o mesmo que [^0-9]

/* Não aceita números */
console.log("D")
console.log(dRegex2.test("asd"));
console.log(dRegex2.test(" "));
console.log(dRegex2.test("123"));
console.log(dRegex2.test("123asdf"));

console.log("");

const sRegex = /\s/; //aceita apenas caracteres de espaço

/* espaços vazios, quebras de linha e tabs */

console.log("s")
console.log(sRegex.test("asd"));
console.log(sRegex.test(" "));
console.log(sRegex.test("123"));
console.log(sRegex.test("123asdf"));

console.log("");

const wRegex = /\w/; 

console.log("w")
console.log(wRegex.test("asd"));
console.log(wRegex.test(" "));
console.log(wRegex.test("123"));
console.log(wRegex.test("123asdf"));

