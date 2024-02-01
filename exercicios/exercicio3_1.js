/*
Codigo condição de pagamento:
- A Vista debito, recebe 10% de desconto;
- a vista no dinheiro ou pix, recebe 15%
- em duas vezes, preço normal de etiqueta sem juros;
- acima de duas vezes, preço normal de etiqueta mais juros 10%;
*/
function aplicarDesconto(valor,desconto){
    return (valor - (valor * (desconto/100)));
}
function aplicarJuros(valor,juros){
    return (valor + (preco*(juros/100)));
}
const preco = 200;
let formaDePagamento = 4;
if (formaDePagamento === 1){
    console.log('No debito o valor vai ficar em R$: ',aplicarDesconto(preco,10));
} else if (formaDePagamento === 2){ 
    console.log('No PIX ou dinheiro o valor vai ficar em R$: ',aplicarDesconto(preco,15));
} else if (formaDePagamento === 3){
    console.log('No parcelamento de ate 2x o valor vai ficar em R$: ',preco);
} else {
   /* const treiVezes = preco + (preco*10)/100;*/
    console.log('No parcelamento de ate 3x o valor vai ficar em R$: ',aplicarJuros(preco,10));
}

const numero = 10;
const numeroEmTexto = '10';
console.log(numero === numeroEmTexto);