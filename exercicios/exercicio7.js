/* Crie um progrma que seja capaz de percorrer um lista de numero e imprima cada
numero par encontrado*/
const numeros = [7,14,21,28,35,42,49,56,63,70];
for (i = 0; i < numeros.length;i++){
    const numero = numeros[i];
    if (numero % 2 === 0){
        console.log(numero);
    }
}