const clientes = [
  {
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
  },
  {
    nome: 'adriano',
    idade: '32',
    cpf: '232343243ddd244',
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
  },
  {
    nome: 'marcos',
    idade: '30',
    cpf: '23233444443243244',
    email: 'joel.adster@gmail.com',
    fones: ['98919782172', '9382983823'],
    dependentes: [
      {
        nome: 'Sarah Silva',
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
]

const listaDeDependentes = [
  ...clientes[0].dependentes,
  ...clientes[1].dependentes,
  ...clientes[2].dependentes
]
console.table(listaDeDependentes)
