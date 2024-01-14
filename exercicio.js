const alunos = [];

alunos.push ({
    nome: "Lucio",
    nota: 6
})
alunos.push ({
    nome: "Ana",
    nota: 2
})
alunos.push ({
    nome: "Felipe",
    nota: 9
})

function filtraAlunosAprovados(aluno) {
    return aluno.nota >= 6
}

const alunosAprovados = alunos.filter(filtraAlunosAprovados)

console.log(alunosAprovados)
