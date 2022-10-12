let p = Promise.resolve(new Error("Não deu certo!"));

console.log("asdfasdf");

p.then((value) => console.log(value));
p.catch((reason) => console.log("Falhou: " + reason));

