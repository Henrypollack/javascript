/*
1- Crie uma classe para representar carros 
Os carros possuem marca, uma cor e um gasto medio decombustivel por km rodado.
crie um metodo que dado a quantiade de km e o preço do combustivel nos de o valor
gasto em reais para realizar esse percruso.
*/
class Carro {
    marca;
    cor;
    gastoMedioPorKm;
    constructor (marca,cor,gastoMedioPorKm){
        this.marca = marca;
        this.cor = cor;
        this.gastoMedioPorKm = gastoMedioPorKm;

    }
    calcularGastodoPercurso(qtdKM,preçoCombustivel) {
         return qtdKM * this.gastoMedioPorKm * preçoCombustivel;
        
    }
}

const uno = new Carro('Fiat','branco',1 / 12);
console.log(uno.calcularGastodoPercurso(70,5).toFixed(2))
const fox = new Carro('Volkswagem','Prata',1 / 12);
console.log(fox.calcularGastodoPercurso(20,6));