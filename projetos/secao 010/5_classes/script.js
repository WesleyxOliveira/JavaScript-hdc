let cachorro = {
    patas: 4,
    raca: "SRD",
    latir: function() {
        console.log("Au Au");
    }
}

let labrador = Object.create(cachorro);

labrador.latir(); // Está estanciando objetos a partir da classe cachorro.

labrador.raca = "Labrador";

console.log(labrador.raca);

console.log(cachorro.raca);

let pastor = Object.create(cachorro);

pastor.raca = "Pastor Alemão";

console.log(pastor.raca);
