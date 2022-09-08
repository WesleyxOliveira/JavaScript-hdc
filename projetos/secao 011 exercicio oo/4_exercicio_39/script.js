class Carro {
    constructor(marca, cor, gasolina_restante, consumo) {
        this.marca = marca;
        this.cor = cor;
        this.gasolina_restante = gasolina_restante;
        this.consumo = consumo;

    }

    set dirigir(km) {
        let litrosConsumidos = km/this.consumo;

        this.gasolina_restante -= litrosConsumidos.toFixed(2);
    }

    set abastecer(gasolina) {
        this.gasolina_restante = this.gasolina_restante + gasolina;
    }
}

let celta = new Carro("Chevrolet", "Prata", 100, 14);

celta.dirigir = 100;

console.log(celta);