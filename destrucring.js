const numPares = [2, 4, 6]
const numImpas = [3, 5, 7]

const numeros = [...numPares, ...numImpas]
console.log(numeros)

const [num1, num2, ...outrosNumeros] = [1, 2, 3, 4, 5, 6, 7]
console.log(num1, num2, outrosNumeros)

const pessoa = {
  nome: 'joel',
  idade: 25
}
const pessoaComTelefone = {
  ...pessoa,
  telefone: 92994710077
}
console.log(pessoa, pessoaComTelefone)
