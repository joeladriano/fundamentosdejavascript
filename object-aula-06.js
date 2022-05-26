const cliente = {
  nome: 'joel',
  idade: '30',
  cpf: '232343243244',
  email: 'joel.adster@gmail.com',
  fones: ['98919782172', '9382983823']
}

cliente.dependentes = {
  nome: 'Sara',
  parentesco: 'Filha',
  dataNasc: '20/06/2011'
}
console.log(cliente)

cliente.dependentes.nome = 'Sara Silva'

console.log(cliente)
