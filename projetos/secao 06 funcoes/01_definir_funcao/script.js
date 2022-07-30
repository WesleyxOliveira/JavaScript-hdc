// OBS: Quando um função não tem nome, é chamada de função anônima.
function imprimirNoConsole() {
    console.log("Olá Mundo!");
}

imprimirNoConsole();

function imprimirUmNumero(num) {
    console.log("O número é " + num);
}

imprimirUmNumero(2);
imprimirUmNumero(4);
imprimirUmNumero(6);
imprimirUmNumero(7);

const numeroAleatorio = function() { //Fução anonima em uma variável.
    console.log(Math.random());
}

numeroAleatorio(); // A funçao anônima responde pelo nome da variável.
numeroAleatorio();
