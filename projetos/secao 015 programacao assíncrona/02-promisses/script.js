let p = Promise.resolve(5);

console.log("Outros códigos");

console.log(p);

p.then((value) => {return console.log(value *= 100)})
p.then((value) => {return console.log(value += 5)});
