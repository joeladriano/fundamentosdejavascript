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
    }
  ]
}
cliente.dependentes.push({
  nome: 'Daniel',
  parentesco: 'Irmão',
  dataNasc: '23/09/1990'
})
//console.log(cliente)

const filhaMaisNova = cliente.dependentes.filter(
  dependente => dependente.dataNasc === '23/09/1990'
)

console.log(filhaMaisNova[0].nome)
