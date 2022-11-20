let elemento = document.querySelector("#titulo-principal");

let elemento2 = document.getElementsByTagName("p")[0];

let elemento3 = document.getElementsByTagName("p")[1];

setTimeout (function() {
    elemento.style.backgroundColor = "blue";
    elemento.style.color = "white";
}, 3000);

setTimeout(function() {
    elemento2.style.backgroundColor = "red";
    elemento2.style.color = "white";
    elemento2.style.width = "400px";
    elemento2.style.padding = "10px";
    elemento2.style.margin = "auto";
}, 6000)
;

setTimeout(function() {
    elemento3.style.backgroundColor = 'black';
    elemento3.style.color = "white";
}, 9000);