class Conta {
    constructor(saldo) {
        this.saldo = saldo;
    }

    deposito(valor) {
        this.saldo = this.saldo += valor;
    };

    saque(valor) {
        this.saldo = this.saldo -= valor;
    }
};

let minhaConta = new Conta(0);

minhaConta.deposito(1000);
minhaConta.saque(230);

console.log(`Saldo: R$ ${minhaConta.saldo.toFixed(2)}`)
