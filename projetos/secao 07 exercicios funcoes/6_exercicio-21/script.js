function tipoDeDados(dado) {
    if (typeof dado === "string") {
        console.log("Dado do tipo String");
    } else if (typeof dado === "number") {
        console.log("Dado do tipo Number");
    } else if (typeof dado === 'boolean') {
        console.log("Dado do tipo Booleano");
    }
}

tipoDeDados("Wesley Oliveira");
tipoDeDados(31);
tipoDeDados(true);