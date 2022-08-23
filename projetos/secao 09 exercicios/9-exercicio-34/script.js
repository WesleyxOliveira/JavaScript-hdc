/*

* Crie um array a partir de uma frase
* Imprima cada palavra do array no console por meio de um for;

*/


let frase = "O cliente em primeiro lugar";

let arr = frase.split(" ");

console.log(arr);

for(let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}