function Filme(titulo, ano) {
    this.titulo = titulo;
    this.ano = ano;
    this.mostrarInfo = function () {
        console.log(`${this.titulo} (${this.ano})`);
    }
}

function Ator(nome, idade, salario) {
    this.idade = idade;
    let _salario = salario;

    this.getSalario = function () {
        return _salario;
    }

    this.setSalario = function (valor) {
        if (typeof valor === 'number') {
            _salario = valor;
        }
    }

    this.aumento = function () {
        const novoSalario = _salario * 1.1;
        _salario = novoSalario;
    }

    this.mostrarInfo = function () {
        console.log(`Ator: ${nome}, Idade: ${this.idade}`);
    }

    Filme.call(this, nome, 0); // herança
}

function Diretor(nome, idade, salario) {
    Ator.call(this, nome, idade, salario);
    
    this.aumento = function () {
        const novoSalario = this.getSalario() * 1.15;
        this.setSalario(novoSalario);
    }

    this.mostrarInfo = function () {
        console.log(`Diretor: ${this.titulo}, Idade: ${this.idade}`);
    }
}

function Produtor(nome, idade, salario) {
    Ator.call(this, nome, idade, salario);

    this.aumento = function () {
        const novoSalario = this.getSalario() * 1.2;
        this.setSalario(novoSalario);
    }

    this.mostrarInfo = function () {
        console.log(`Produtor: ${this.titulo}, Idade: ${this.idade}`);
    }
}

const ator1 = new Ator("Johnny Depp", 58, 500000);
const diretor1 = new Diretor("Christopher Nolan", 51, 1000000);
const produtor1 = new Produtor("Steven Spielberg", 75, 1500000);

ator1.aumento();
console.log(`Salário do Ator: ${ator1.getSalario()}`);

diretor1.aumento();
console.log(`Salário do Diretor: ${diretor1.getSalario()}`);

produtor1.aumento();
console.log(`Salário do Produtor: ${produtor1.getSalario()}`);
