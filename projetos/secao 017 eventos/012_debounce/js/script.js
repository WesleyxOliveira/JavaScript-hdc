let timeout;

window.addEventListener("mousemove", function(e) {
    clearTimeout(timeout);
    timeout = setTimeout(function() {
        console.log("X = " + e.x);
    }, 500);
})