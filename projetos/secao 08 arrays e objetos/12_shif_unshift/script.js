let carros = ["BMW", "Audi", "VW", "Fiat"];

let removerPrimeiroCarro = carros.shift();
console.log(removerPrimeiroCarro);
console.log(carros);

carros.unshift("Gurgel");

console.log(carros[0]);
console.log(carros);

window.document.write(carros[carros.length-1]);