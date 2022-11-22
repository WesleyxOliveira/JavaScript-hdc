window.addEventListener("keydown", (e) => {
    
    if(e.key == "d" || e.key == "D") {
        window.alert("Apertou o D");
    } else if(e.key == "f" || e.key == "F") {
        window.alert("Apertou a letra f");
    }
})

window.addEventListener("keyup", (e) => {
    if(e.key == "Enter") {
        alert("Soltou o Enter");
    }
})

window.addEventListener("keypress", (e) => {
    
    if(e.key) {
        alert("Apertou uma tecla");
    }

})