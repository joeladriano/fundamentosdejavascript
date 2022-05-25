const nome = 'Alura'
let nomeMaiuscula = ''

for (let i = 0; i < nome.length; i++) {
  nomeMaiuscula = nomeMaiuscula + nome[i].toLocaleUpperCase()
}
console.log(nomeMaiuscula)

const nomeDoCurso = "Fundamentos de JavaScrip"
const nomePlataforma = ' Alura'

const nomeCompleto = nomeDoCurso.concat(nomePlataforma)
console.log(nomeCompleto)