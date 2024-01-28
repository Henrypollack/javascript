/* Faça um programa pra calcular o valor de uma viagem.

Você terá 5 variaveis, sendo elas:
1- Preço do etanol;
2- Preço da gasolina;
3- O tipo de combustivel que esta no seu carro;
4- Gasto medio de combustivel do carro por km:;
5- Distancia em KM da viagem;

imprima no console o valorq que sera gasto em reais 
para realizar esta viagem.

*/
const precoGasolina = 5.79;
const precoEtanol = 6.66;
const distancia = 1580;
const tipoCombustivel = 'Gasolina';
const kmPorLitros = 10;
const litrosConsumidos = distancia / kmPorLitros
if (tipoCombustivel === 'Etanol') {
    let gasto = litrosConsumidos * precoEtanol;
    console.log("O seu carro gastou R$: ", gasto.toFixed(2));
} else {
    let gasto = litrosConsumidos * precoGasolina;
    console.log("O seu carro gastou R$: ", gasto.toFixed(2));
}

