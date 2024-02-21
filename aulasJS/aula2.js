const numero = 11;

const numeroPar = (numero % 2) === 0;

console.log(numeroPar)
if (numero === 0) {
    console.log('O Numero é invalido');
} else if (numeroPar) {
    console.log('Par');
} else {
    console.log('Impar');
}