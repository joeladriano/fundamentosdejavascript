class Cliente {
  constructor(nome, email, cpf, saldo) {
    this.nome = nome
    this.email = email
    this.cpf = cpf
    this.saldo = saldo
  }
  depositar(valor) {
    this.saldo += valor
  }
  exibirSaldo() {
    console.log(this.saldo)
  }
}

class ClientePoupanca extends Cliente {
  constructor(nome, email, cpf, saldo, saldoPoupanca) {
    super(nome, email, cpf, saldo)
    this.saldoPoupanca = saldoPoupanca
  }
  depositarPoupanca(valor) {
    this.saldoPoupanca += valor
  }
}
const JoelADR = new ClientePoupanca('joel', 'joel@joel', '213213123', 120, 500)
console.log(JoelADR)
JoelADR.depositarPoupanca(90)
console.log(JoelADR)
