
function decremento(n) {
    /*
    while(n >= 0) {
        if (n %2 == 0) {
            console.log(n);
        }
        n = n-1;
    }

   for(let c = n; c >= 0; c--) {
    if (c %2 == 0) {
        console.log(c)
    }
   }

   */

   do {
        if (n %2 == 0) {
            console.log(n);
        }
        n = n-1;
   } while (n >= 1);
   console.log("Fim");
}

decremento(6); 
