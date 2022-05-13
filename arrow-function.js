function apresentacao(nome) {
  return `Meu nome é ${nome}`
}

const apresentaArrow = nome => `Meu nome é ${nome}`
console.log(apresentaArrow('Joel'))

const soma = (number1, number2) => number1 + number2
console.log(soma(10, 30))

const somaNumerosPequenos = (num1, num2) => {
  if (num1 || num2 >= 10) {
    return 'Somente números de 1 a 9'
  } else {
    return num1 + num2
  }
}
