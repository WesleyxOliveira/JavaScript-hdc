let btn1 = document.querySelector("#btn1");
let btn2 = document.querySelector("#btn2");
let p = document.querySelector("p");
let link = document.querySelector("div a");

function msg(e) {
    console.log("Clicou no button");
    e.stopPropagation();
}

btn1.addEventListener("click", msg);

btn2.addEventListener("click", function(event) { /* msm coisa do codigo acima escrito de uma forma diferente*/
    console.log(event);
});

p.addEventListener("click", () => {
    console.log("Clicou no parágrafo!");
})

link.addEventListener("click", (e) => {
    e.preventDefault();
    alert("Clicou!");
});