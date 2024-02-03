const pessoa  = {
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
/* henry.altura = 1.76;
delete henry.nome;
console.log(henry.nome);
console.log(henry.idade);
console.log(henry.nivelDoCharNoTibia);
console.log(henry);*/
pessoa.nome = 'Heitor';
pessoa.idade = 0.9;

pessoa.descrever();
