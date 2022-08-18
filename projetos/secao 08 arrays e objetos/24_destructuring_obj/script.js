/*
 destructuring serve para desestruturar o obj em variáveis, tornando o acesso aos valores da propriedade mais fácil sem ter que escrever por exemplo o nome do obj e da propriedade(obj.rodas) por exemplo.
*/

let obj = {
    rodas: 4,
    portas: 4,
    tetosolar: true,
    motor: "2.0"
}

const {portas: vportas,  rodas: vrodas,tetosolar: vtetosolar, motor: vmotor} = obj;

console.log(vrodas);
console.log(vportas);
console.log(vtetosolar);
console.log(vmotor);

console.log("Parou");

console.log(obj.rodas);
console.log(obj.portas);
console.log(obj.tetosolar);
console.log(obj.motor);