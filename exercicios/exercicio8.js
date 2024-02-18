

/* Uma sala contem 5 alunos e para cada aluno foi sorteado um numero de 
1 - 100 
faça um programa que receba os 5 numeros sorteados para os alunos e mostre 
o maior sorteado.
Dados de entrada:
5
50
10
98
23
Saida:
98
*/

const { gets,print }  = require('../funcoes_aux.js');
const numeroDeAlunos = gets();
let maiorValorEncontrado = 0;
for(let i = 0; i<numeroDeAlunos;i++){
    const numeroSorteado = gets();
    if(numeroSorteado > maiorValorEncontrado)
        maiorValorEncontrado = numeroSorteado;
}
print(maiorValorEncontrado);
/*const numerosSorteados = [];

for (let i = 0; i < 5; i++){
    const numeroSorteado = gets();
    numerosSorteados.push(numeroSorteado);
}
let maiorValor = 0;
for(let i = 0; i <numerosSorteados.length;i++){
    const numeroSorteado = numerosSorteados[i];
    if (numeroSorteado>maiorValor){
        maiorValor = numeroSorteado;
    }
}
print(maiorValor);*/