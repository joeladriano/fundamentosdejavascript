function Cliente(nome, cpf, email, saldo) {
  this.nome = nome
  this.cpf = cpf
  this.email = email
  this.saldo = saldo
  this.depositar = function (valor) {
    this.saldo += valor
  }
}
function ClientePoupanca(nome, cpf, email, saldo, saldoPoup) {
  Cliente.call(this, nome, cpf, email, saldo)
  this.saldoPoup = saldoPoup
}
const Elton = new ClientePoupanca(
  'Elton',
  '23322343243234',
  'elton@elton',
  100,
  200
)
console.log(Elton)

ClientePoupanca.prototype.depositarPoup = function (valor) {
  this.saldoPoup += this.saldoPoup
}
Elton.depositarPoup(300)
console.log(Elton)
