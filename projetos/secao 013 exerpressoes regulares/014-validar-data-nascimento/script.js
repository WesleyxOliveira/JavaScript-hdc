const validarNascimento = /[0-31]{2}[/][0-12]{2}[/][1921-2022]{4}/;

console.log(validarNascimento.test('11/03/1991'));
console.log(validarNascimento.test('11/3/1991'));
console.log(validarNascimento.test('11-03-1991'));
console.log(validarNascimento.test('11/03/91'));     
console.log(validarNascimento.test('99/99/9999'));      
console.log(validarNascimento.test('31/00/2010'));      