let btn1 = document.querySelector("#btn1");
let btn2 = document.querySelector("#btn2");



btn1.addEventListener("mouseup", () => { // Ao soltar o botão do mouse;
    alert("Soltou o botão do mouse!");
})

btn2.addEventListener("dblclick", () => { // Ao clicar duas vezes em curto intervalo de tempo;
    window.alert("Clicou duas vezes!");
});

btn2.addEventListener("contextmenu", function(e) { 
    e.preventDefault(); // impede que o menu de contexto apareça ao clicar com o botão direito do mouse;
    alert("Clicou com o botão direito no botão 2");
});