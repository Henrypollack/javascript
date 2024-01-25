/* Faça um programa pra calcular o valor de uma viagem.

Você terá 3 variaveis, sendo elas:
1- Preço do combustivel;
2- Gasto medio de combustivel do carro por km:;
3- Distancia em KM da viagem;

imprima no console o valorq que sera gasto em reais 
para realizar esta viagem.

*/
const precoCombustivel = 5.79;
const kmPorLitros = 12;
const distancia = 1580;

let gasto = (distancia/kmPorLitros)*precoCombustivel;
console.log("O seu carro gastou R$: ",gasto.toFixed(2));