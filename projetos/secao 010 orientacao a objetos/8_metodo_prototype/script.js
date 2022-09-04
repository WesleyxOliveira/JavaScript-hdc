function Cachorro(raca, patas, cor) {
    this.raca = raca;
    this.patas = patas;
    this.cor = cor;
}

Cachorro.prototype.uivar = function() { // Adiciona o método ao prototype, assim, todos os filhos dessa classe herdam os métodos. A classe fica apenas com as propriedades e os métodos são criados fora.
    console.log("Auuuu...");
}

Cachorro.prototype.latir = function() {
    console.log("Au Au");
}

let husky = new Cachorro("Husky", 4, "cinza");

husky.uivar();
husky.latir();



