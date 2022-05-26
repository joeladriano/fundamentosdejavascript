const cliente = {
  nome: 'joel',
  idade: '30',
  cpf: '232343243244',
  email: 'joel.adster@gmail.com'
}

const chaves = ['nome', 'idade', 'cpf', 'email']
console.log(`Meu nome é ${cliente[chaves[0]]}`)

chaves.forEach(info => console.log(cliente[info]))

console.log(cliente['nome'])
