// window.addEventListener("load", function(e) {

//     this.alert("Assine os nosso termos de uso");

// });


window.addEventListener("beforeunload", function(e) {

    e.returnValue = null;

});