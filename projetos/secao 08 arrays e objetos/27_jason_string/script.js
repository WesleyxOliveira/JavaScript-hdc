
let pessoa = {
    "nome": "Wesley",
    "idade": 31,
    "profissao": "Programador",
    "hobbies": ["Video game", "Leitura", "Correr"]
}

let pessoaTexto = JSON.stringify(pessoa); // Covertendo o JSON para uma string se caso eu precisar enviar os daddos para o servidor como string.

console.log(pessoaTexto);

let pessoaJSON = JSON.parse(pessoaTexto); // Converti para JSON.

console.log(pessoaJSON);

console.log(pessoaJSON.hobbies[0]);
