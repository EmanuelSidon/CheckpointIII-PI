const { quantidaDeFaltas } = require('./alunos');
const aluno = require('./alunos');
const estudantes = require('./estudantes');

const curso = {
  nomeCurso: 'Programação Imperativa',
  notaAprovacao: 7,
  limiteDeFaltas: 2,
  listaEstudantes: [
    estudantes.emanuel,
    estudantes.michelli,
    estudantes.vinicius,
    estudantes.ismael,
    estudantes.igor
  ],
  adicionarAluno(nome, faltas, notas) {
    this.listaEstudantes.push(new aluno.construtor(nome, faltas, notas));
  },
  aprovacao(_aluno) {
    const media = aluno.calcularMedia(_aluno);

    if (media >= this.notaAprovacao && _aluno.quantidaDeFaltas < this.limiteDeFaltas) {
      return `Muito bem, o aluno(a) ${_aluno.nome} foi aprovado`;
    } 
    else if (_aluno.quantidaDeFaltas === this.limiteDeFaltas && media > this.notaAprovacao * 1.1) {
      return `Woowww o aluno(a) ${_aluno.nome} foi aprovado com Louvor!!!`;
    } 
    else {
      return `Sinto muito, o aluno(a) ${_aluno.nome} foi reprovado`;
    }
  },
  listaAprovados() {
    let alunosAprovados = [];

    this.listaEstudantes.forEach(estudante => {
      alunosAprovados.push(this.aprovacao(estudante));
    });

    return alunosAprovados;
  },
};

curso.adicionarAluno('Isabela', 0, [2, 10, 10]);

const aprovados = curso.listaAprovados();

aprovados.forEach(aprovado => {
console.log(aprovado);
});


console.log(curso.listaEstudantes);