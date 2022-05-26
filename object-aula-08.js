const cliente = {
  nome: 'joel',
  idade: '30',
  cpf: '232343243244',
  email: 'joel.adster@gmail.com',
  fones: ['98919782172', '9382983823'],
  dependentes: [
    {
      nome: 'Sara Silva',
      parentesco: 'Filha',
      dataNasc: '25/03/1992'
    },
    {
      nome: 'Daniel',
      parentesco: 'Irmão',
      dataNasc: '23/09/1990'
    }
  ],
  saldo: 100,
  depositar: function (valor) {
    this.saldo += valor
  }
}
console.log(cliente.saldo)
cliente.depositar(150)
console.log(cliente.saldo)
