/*
Codigo condição de pagamento:
- A Vista debito, recebe 10% de desconto;
- a vista no dinheiro ou pix, recebe 15%
- em duas vezes, preço normal de etiqueta sem juros;
- acima de duas vezes, preço normal de etiqueta mais juros 10%;
*/
const preco = 200;
let formaDePagamento = 4;
if (formaDePagamento === 1){
    const debito = preco - (preco*10)/100;
    console.log('No debito o valor vai ficar em R$: ',debito);
} else if (formaDePagamento === 2){
    const pix = preco - (preco*15)/100;
    console.log('No PIX ou dinheiro o valor vai ficar em R$: ',pix);
} else if (formaDePagamento === 3){
    console.log('No parcelamento de ate 2x o valor vai ficar em R$: ',preco);
} else {
    const treiVezes = preco + (preco*10)/100;
    console.log('No parcelamento de ate 3x o valor vai ficar em R$: ',treiVezes);
}

const numero = 10;
const numeroEmTexto = '10';
console.log(numero === numeroEmTexto);