let p = Promise.resolve(new Error("Não deu certo!"));

console.log("lalala");

p.then((value) => console.log(value));
p.then((reason) => console.log("Falhou: " + reason));