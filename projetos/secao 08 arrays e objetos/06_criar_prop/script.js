let pessoa = {
    nome: "Wesley", 
    idade: 31, 
    profissão: "Programador",
}

console.log(pessoa.nome);

delete pessoa.nome;

console.log(pessoa.nome);

console.log(pessoa);

pessoa.casado = false;

console.log(pessoa);