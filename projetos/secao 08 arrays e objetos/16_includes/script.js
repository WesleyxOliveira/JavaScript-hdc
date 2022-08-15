 /* Esse método procura o valor passado por parâmetro e retorna true se existe esse elemento no array ou false se não existe. */

let carros = ["BMW", "Fiat", "VW", "Renault", "Audi"];

console.log(carros.includes("Ford")); // =>  false
console.log(carros.includes("Fiat")); // => true;

if(carros.includes("BMW")) {
    console.log("O melhor carro que temos é o " + carros[0]);
}