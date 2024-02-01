/*
1) IMC em adulto condição
- Abaixo de 18.5 abaixo do peso;
- entre 18.5 e 25 peso normal;
- entre 25 e 30 acima do peso;
- entre 30 e 40 obeso;
- acima de 40 obesidade grave;
*/
(function main () {
const altura = 1.75;
const peso = 145;
function calcularIMC (peso,altura){
    return peso / (altura * altura);
}
const IMC = calcularIMC(peso,altura);
function classificarIMC (IMC){
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
console.log(classificarIMC(IMC));
})();

