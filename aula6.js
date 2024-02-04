class Pessoa {
    nome;
    idade;
    NoTibia;
    constructor(nome,idade,charNoTibia){
        this.nome = nome;
        this.idade = idade;
        this.NoTibia = charNoTibia;
        this.anoNascimento = 2024 - idade;
    }

    descrever(){
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}`);
    }
}
const henry = new Pessoa('Henry Pollck',30,'Merdoxhero');
const filho = new Pessoa('Heitor',0.9,'Milarra Luda');

console.log(henry);
console.log(filho);


/*const henry = new Pessoa();
henry.nome = 'Henry Pollack';
henry.idade = 30;
henry.charNoTibia = 'Merdoxhero';
const heitor = new Pessoa();
heitor.nome = 'Heitor de Oliveira';
heitor.idade = 0.9;
heitor.charNoTibia = 'Milarra Luda';
console.log(henry);
console.log(heitor);
henry.descrever();
heitor.descrever();
const henry  = {
    nome: 'Henry Pollack',
    idade: 25,
    nivelDoCharNoTibia: 248,
    descrever: function () {
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}`);
    }
};
pessoa.descrever = function(){
    console.log(`Meu nome é ${this.nome}`)
}
console.log(pessoa['nome']);
pessoa['nome'] = 'Heitor';
console.log(pessoa['nome']);
 henry.altura = 1.76;
delete henry.nome;
console.log(henry.nome);
console.log(henry.idade);
console.log(henry.nivelDoCharNoTibia);
console.log(henry);
pessoa.nome = 'Heitor';
pessoa.idade = 0.9;
pessoa.descrever();*/
