function multiplicarTresNumeros(x, y, z) {
    return x * y * z;
}

console.log(multiplicarTresNumeros(2, 3, 4));

const mult = multiplicarTresNumeros(5, 4, 8);

console.log("O valor da multiplicação é " + mult);

function podeDirigir(idade, cnh) {
    if (idade >= 18 && cnh == true) {
        console.log("Pode dirigir");
    } else if (idade >= 18 && cnh == false) {
        console.log("Não pode dirigir mas pode fazer a cnh");
    } else {
        console.log("Não pode dirigir!");
    }
}

console.log(podeDirigir(20, 1)); // idade > 18 e cnh = true (1 == true)
console.log(podeDirigir(20, 0)); // idade > 18 e cnh == false (0 == false)
console.log(podeDirigir(16, false)); // idade < 18 e cnh == false