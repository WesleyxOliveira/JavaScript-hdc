function verificarNumero(num) {
    return new Promise((resolve, reject) => {
        if(num == 2) {
            resolve (console.log("O número é 2"));
        } else {
            reject(new Error("Falho"));
        }
    });
}

verificarNumero(2);
verificarNumero(4);