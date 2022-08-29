class Cachorro {
    constructor(raca, patas, cor) {
        this.raca = raca;
        this.patas = patas;
        this.cor = cor;
    }
}

//Métodos
Cachorro.prototype.uivar = function() {
    console.log("Auuuuuuu");
}
Cachorro.prototype.latir = () => console.log("Au au");

//instanciando o objeto Pastor
let Pastor = new Cachorro("Pastor Alemão", 4, "Caramelo");

console.log(Pastor);
console.log(Pastor.raca);
console.log(Pastor.patas);
console.log(Pastor.cor);
Pastor.latir();
Pastor.uivar();