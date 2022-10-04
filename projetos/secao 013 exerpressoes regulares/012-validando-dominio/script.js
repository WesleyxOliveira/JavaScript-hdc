const  validaDominio = /[?www.]\w+\.com.br|.com/;

console.log(validaDominio.test('wwww.google.com'));
console.log(validaDominio.test('wwww.horadecodar.com.br'));
console.log(validaDominio.test('www.horadecodar'));
console.log(validaDominio.test('horadecodar.com.br'));

//www.google.com