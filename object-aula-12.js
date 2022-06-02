function Cliente(nome, cpf, email, saldo) {
  this.nome = nome
  this.cpf = cpf
  this.email = email
  this.saldo
  this.depositar = function (valor) {
    this.saldo += valor
  }
}

const joel = new Cliente('joel Addriano', '123213213', 'joel.adster', 100)
console.log(joel)
