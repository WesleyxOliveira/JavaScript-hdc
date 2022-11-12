let novoElemento = document.createElement("p");
let texto = document.createTextNode("Algum texto");
novoElemento.appendChild(texto);

let elementoAlvo = document.querySelector("#titulo-principal");
let elementoPai = elementoAlvo.parentNode;

elementoPai.insertBefore(novoElemento, elementoAlvo);

