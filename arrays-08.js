const alunos = ['João', 'Juliana', 'Caio', 'Ana']
const medias = [10, 7, 9, 6]
let listaMediasAlunos = [alunos, medias]

const exibeNomeMedia = nomeAluno => {
  if (listaMediasAlunos[0].includes(nomeAluno)) {
    let indice = listaMediasAlunos[0].indexOf(nomeAluno)
    return (
      listaMediasAlunos[0][indice] +
      ', Sua média é: ' +
      listaMediasAlunos[1][indice]
    )
  } else {
    return 'Aluno não cadastrado!'
  }
}

console.log(exibeNomeMedia('joel'))
