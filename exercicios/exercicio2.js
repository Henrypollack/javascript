/*
1) IMC em adulto condição
- Abaixo de 18.5 abaixo do peso;
- entre 18.5 e 25 peso normal;
- entre 25 e 30 acima do peso;
- entre 30 e 40 obeso;
- acima de 40 obesidade grave;
*/
const altura = 1.75;
const peso = 145;
let IMC = peso / (altura * altura);
if (IMC < 18.5){
    console.log('Voce esta abaixo do peso!');
} else if (IMC > 18.5 && IMC < 25) {
    console.log('Peso normal!');
} else if (IMC > 25 && IMC < 30){
    console.log('Acima do peso');
} else if (IMC > 30 && IMC < 40){
    console.log('Voce esta OBESO');
} else if (IMC > 40){
    console.log('Obesidade grave');
}

console.log(IMC.toFixed(2));
