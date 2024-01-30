/* function teste (comida) {
    console.log('O que você comeu hoje?', comida);
}
teste('Macarrao');
teste('Rabada ;)');
teste('pao com ovo');
*/
/* function quadrado (valor){
   return valor * valor;
}
const quadradoDeDez = quadrado(10) + quadrado(10)
console.log(quadradoDeDez)
*/
function juros(valor,percentualJuros){
    const valorDeAcrescimo = (percentualJuros/100)*valor;
    return valor + valorDeAcrescimo 
}
console.log(juros(100,10));
console.log(juros(100,15));
console.log(juros(100,20));