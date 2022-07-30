let a = 10; // Escopo global.

function multiplicar(x, y) {
    let a = x * y; 

    if (a > 10) {
        let a = 0; 

        a++;

        console.log(a); // Escopo do if.
    }

    console.log(a); // Escopo da função.
}

console.log(a); // Escopo Global.

multiplicar(3, 4);