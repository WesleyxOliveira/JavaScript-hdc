class Cachorro {
    constructor(raca, cor) {
        this.raca = raca;
        this.cor = cor;
    }

    latir() {
        console.log("Au au");
    }
}

Cachorro.prototype.raca = "SRD";

let patas = Symbol();

Cachorro.prototype[patas] = 4;

let Pastor = new Cachorro("Pastor Alemão", "Preto");


//Acessando o symbol
console.log(Cachorro.prototype[patas]);
console.log(Pastor[patas]);


