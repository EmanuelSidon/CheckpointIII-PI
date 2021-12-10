const aluno = {
  nome: null,
  quantidaDeFaltas: null,
  notas: [],
  construtor: function(nome, quantidaDeFaltas, notas) {
    this.nome = nome;
    this.quantidaDeFaltas = quantidaDeFaltas;
    this.notas = notas;
  },

  calcularMedia(aluno) {
    let mediaDasNotas = 0;

    aluno.notas.forEach(nota => {
        mediaDasNotas += nota;
    });

    return mediaDasNotas/aluno.notas.length;
  },

  faltas(aluno) {
    aluno.quantidaDeFaltas++;
  }
};

/* aluno.construtor('Mariane', 2, [10,2,9]); */
/* console.log(aluno); */

module.exports = aluno;