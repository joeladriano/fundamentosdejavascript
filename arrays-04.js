const nomes = [
  'João',
  'Juliana',
  'Ana',
  'Caio',
  'Lara',
  'Marjorie',
  'Guilherme',
  'Aline',
  'Fabiana',
  'André',
  'Carlos',
  'Paulo',
  'Bia',
  'Vivian',
  'Isabela',
  'Vinícios',
  'Renan',
  'Renata',
  'Deisy',
  'Camilo',
  'Joel'
]

console.log(nomes.length)
const sala01 = nomes.slice(0, nomes.length / 2)
console.log(`Alunos da sala 01: ${sala01}`)
const sala02 = nomes.slice(nomes.length / 2, nomes.length)
console.log(`Alunos da sala 02: ${sala02}`)
