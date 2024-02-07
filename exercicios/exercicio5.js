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
    classificarIMC(){
        const IMC = this.calcularIMC(); 
        if (IMC < 18.5){
            return ('Voce esta abaixo do peso!');
        } else if (IMC > 18.5 && IMC < 25) {
            return ('Peso normal!');
        } else if (IMC > 25 && IMC < 30){
            return ('Acima do peso');
        } else if (IMC > 30 && IMC < 40){
            return ('Voce esta OBESO');
        } else if (IMC > 40){
            return ('Obesidade grave');
        }
    }
}

const jose = new Pessoa('Jõao',70,1.75);
console.log(jose.calcularIMC().toFixed(2));
console.log(jose.classificarIMC());
const henry = new Pessoa('Henry',94,1.80);
console.log(henry.classificarIMC());
console.log(henry.calcularIMC().toFixed(2));
