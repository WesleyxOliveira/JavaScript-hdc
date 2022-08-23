/*
Minha solução e a do professor ficaram iguais

* Adicione a propriedade janelas no ônibus, com o valor de 20

* Delete a propriedade rodas

* Imprima a propriedade janelas no console

*/


var onibus = {
    rodas: 8,
    limitePassageiros: 40,
    portas: 2
};

onibus.janelas = 20;
delete onibus.rodas;


console.log(onibus);
console.log(onibus.janelas);