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

function oferecerSeguro(obj) {
  const propsClientes = Object.keys(obj)
  if (propsClientes.includes('dependentes')) {
    console.log(`Oferta de seguro de vida para ${obj.nome}`)
  }
}
oferecerSeguro(cliente)
console.log(Object.values(cliente))