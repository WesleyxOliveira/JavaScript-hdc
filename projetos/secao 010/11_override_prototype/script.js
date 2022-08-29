class Cachorro {
    constructor(raca, patas, cor) {
        this.raca = raca;
        this.cor = cor;
    }
    latir() {
        console.log("Au au");
    }
}

Cachorro.prototype.raca = "SRD";
Cachorro.prototype.patas = 4;//Criei a prop patas direto no prototype já que o num de patas é padrão.

let Pastor = new Cachorro("Pastor Alemão", 4, "Caramelo"); 

console.log(Pastor.patas);
Pastor.latir();

console.log(Cachorro.prototype.raca);
console.log(Pastor.raca);
console.log(Cachorro.prototype.raca);
