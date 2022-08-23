/*

* Crie um objeto calculadora

* Que tem os seguintes métodos: somar, subtrair, multiplicar e dividir;

* Os métodos só devem aceitar dois paràmetros;

* Utilize cada um dos métodos e imprima os valores no console;

*/


let calculadora = {
    somar: function(num1, num2) {
        return num1 + num2;
    },

    subtrair: function(num1, num2) {
        return num1 - num2;
    },

    multiplicar: function(num1, num2) {
        return num1 * num2;
    },

    dividir: function(num1, num2) {
        return num1 / num2;
    }

}

console.log(calculadora.somar(1, 2));
console.log(calculadora.subtrair(17, 3));
console.log(calculadora.multiplicar(17, 3));
console.log(calculadora.dividir(17, 3).toFixed(2));