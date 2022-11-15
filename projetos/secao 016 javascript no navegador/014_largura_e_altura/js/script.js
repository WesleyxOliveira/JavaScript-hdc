let elemento = document.querySelector("#titulo-principal");

console.log("Largura: " + elemento.offsetWidth); // considera as bordas;
console.log("Altura: " + elemento.offsetHeight); // considera bordas;

console.log("");

console.log("Altura: " + elemento.clientWidth); // Não considera borda;
console.log("Altura: " + elemento.clientHeight); // não considera bordas;
