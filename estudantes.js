const aluno = require('./alunos');

const emanuel = new aluno.construtor('Emanuel', 0, [10, 10, 5]);
aluno.faltas(emanuel);

const michelli = new aluno.construtor('Michelli', 0, [8, 8, 8]);
aluno.faltas(michelli);
aluno.faltas(michelli);

const vinicius = new aluno.construtor('Vinicius', 0, [9, 5, 10]);
const ismael = new aluno.construtor('Ismael', 0, [2, 2, 9]);
aluno.faltas(ismael);

const igor = new aluno.construtor('igor', 0, [2, 10, 5]);
aluno.faltas(igor);

module.exports = {
  emanuel,
  michelli,
  vinicius,
  ismael,    
  igor
}