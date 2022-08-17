/* 
O método de string padstart() adiciona elementos antes da string, no exemplo abaixo esse método está padronizando as strings

Obs: o primeiro parâmetro é o cumprimento máximo e o segundo o que dever ser colocando antes da string.
*/

let sku = "34";

console.log(sku.padStart(6, "0"));

let sku2 = "274";

console.log(sku2.padStart(6, "x"));

// Outro exemplo.

let cpf = "02839778475";

let last4Numbers = cpf.slice(-4);
let maskedNumbers = last4Numbers.padStart(cpf.length, "*");

console.log(`CPF: ${maskedNumbers}`);

// Outro exemplo.

console.log("abc".padStart(6, "0")); // => 000abc.