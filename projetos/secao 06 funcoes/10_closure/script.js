// function lembrarSoma(x) {
//     return y => x+y;
// }

// let soma1 = lembrarSoma(5);
// console.log(soma1(2));
// window.alert(soma1(4));
// document.write(soma1(10));

function contador (i) {
    let cont = i;
    let somarContador = function () {
        console.log(cont);
        cont++;
    }
    return somarContador;
}

let meuContador = contador(5);
meuContador();
meuContador();
meuContador();
meuContador();

let meuContador2 = contador(10);

meuContador2();
meuContador2();
meuContador2();
meuContador2();
meuContador2();