/*
Crie uma classe para resperesnetar pessoas.
para cada pessoa teremos s atributos nome, peso e altura.
as pessoas devem ter a capacidade de dizer o valor do
seu IMC
Instancie uma pessoa chamada jose que tenha 70kg peso 
e uma altura de 1,75 e peça pro jose dizer o valor do seu IMC
*/
class Pessoa {
    nome;
    peso;
    altura;
    calcularIMC() {
    return this.peso/(this.altura*this.altura);
     
    }
    constructor(nome,peso,altura){
        this.nome = nome;
        this.peso = peso;
        this.altura = altura;

    }
}

const jose = new Pessoa('Jõao',70,1.75);
console.log(jose.calcularIMC().toFixed(2));
const henry = new Pessoa('Henry',94,1.80);
console.log(henry);
console.log(henry.calcularIMC().toFixed(2));