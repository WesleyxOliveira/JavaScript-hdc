const digitos = /\d+/;

console.log(digitos.exec('tem o número 100 aqui')); // retorna um objeto com algumas informações. ex: index do padrão encontrado e etc.

console.log(digitos.exec('tem o número aqui')); // retorna null pois n foi encontrado um padrão compatível com a regex.