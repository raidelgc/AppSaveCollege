const alunos = [
  {
    nome: "João",
    altura: 1.75,
    idade: 15,
    sexo: "masculino",
    sala: 1,
    matematica: 9,
  },
  {
    nome: "Maria",
    altura: 1.65,
    idade: 16,
    sexo: "feminino",
    sala: 2,
    matematica: 7,
  },
  {
    nome: "Pedro",
    altura: 1.8,
    idade: 17,
    sexo: "masculino",
    sala: 3,
    matematica: 8,
  },
  {
    nome: "Ana",
    altura: 1.6,
    idade: 14,
    sexo: "feminino",
    sala: 4,
    matematica: 6,
  },
  {
    nome: "José",
    altura: 1.7,
    idade: 16,
    sexo: "masculino",
    sala: 5,
    matematica: 8,
  },
];
console.log(alunos);
let soma = 0;
alunos.forEach((aluno) => {
  soma += aluno.matematica;
  if (aluno.matematica >= 7) {
    console.log(aluno.nome + " Aprovado");
  } else {
    console.log(aluno.nome + " Reprovado");
  }
});
const media = soma / alunos.length;
console.log(`Média das notas de matemática: ${media}`);
