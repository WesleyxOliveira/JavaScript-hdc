let novoElemento = document.createElement("p");
let texto = document.createTextNode("Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus nam quibusdam, vitae iure totam, blanditiis doloribus veniam voluptatum eligendi esse obcaecati dignissimos adipisci ipsam non dolore tenetur maxime itaque dolores.");
novoElemento.appendChild(texto);

let heading = document.querySelector("#titulo-principal");

let paiHeading = heading.parentNode;

paiHeading.replaceChild(novoElemento, heading);