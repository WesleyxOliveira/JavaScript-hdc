class Endereco {
    constructor(rua, bairro, cidade, estado) {
        this.rua = rua;
        this.bairro = bairro;
        this.cidade = cidade;
        this.estado = estado;
    }

    set novaRua(novaRua) {
        this.rua = novaRua;
    }

    set novoBairro(novoBairro) {
        this.bairro = novoBairro;
    }

    set novaCidade(novaCidade) {
        this.cidade = novaCidade;
    }

    set novoEstado(novoEstado) {
        this.estado = novoEstado;
    }
}

let endereco = new Endereco("Araçari", "Colina Azul", "Aparecida de Goiânia", "Goiás");

console.log(endereco);

endereco.novaRua = "Rua vitória";
endereco.novoBairro = "Setor dos Estados";
endereco.novaCidade = "Florianopolis";
endereco.novoEstado = "Santa Catarina";

console.log(endereco)

