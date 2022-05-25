const notas01 = [10, 6.5, 8, 7.5]
const notas02 = [9, 6, 6]
const notas03 = [8.5, 9.5]

const notasGerais = [notas01, notas02, notas03]
let media = 0

for (let i = 0; i < notasGerais.length; i++) {
  for (let j = 0; j < notasGerais[i]; j++) {
    media += notasGerais[i][j] / notasGerais[i].length
  }
}
console.log(media)
