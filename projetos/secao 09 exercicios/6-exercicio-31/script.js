/*
* Crie dois arrays, um com mais de 5 elementos e outro com menos

* Faça uma função que verifica o número de elmentos;

* Se possuir menos que 5, imprima "Poucos elementos" no console

* Se tiver mais, imprima "Muitos elementos"

*/


let numbers = [2, 3, 6, 1, 9, 4, 7];

let numbers2 = [1, 2, 3];

function numerosElementos(num) {
    if(num.length < 5) {
        console.log("Poucos elementos");
    } else {
        console.log("Muitos elementos");
    }
}

numerosElementos(numbers);
numerosElementos(numbers2);