# DIO | 2ª Aula de JavaScript ![alt text](https://i.imgur.com/5ENxfZf.png "logo textro")
## Funções
- Para chamar uma função usamos o `function` como no exemplo abaixo. E depois para invocarmos a função ou sej usar ela só colocamos o nome dela.
```
function teste () {
    console.log('Oi boi')
}
teste()
teste()
teste()

```
- Conseguimos adcionar parametros também a função como no exemplo abaixo.
```
function teste (comida) {
    console.log('O que você comeu hoje?', comida);
}
teste('Macarrao');
teste('Rabada ;)');
teste('pao com ovo');
```
- No console ira aparecer isso:

> O que você comeu hoje? macarrao
> O que você comeu hoje? nada
> O que você comeu hoje? pao com ovo

- Vamos fazer um outro exemplo:
```
function quadrado (valor){
    valor * valor;
}
quadrado(10)
console.log(quadrado)
```
- No exemplo acima estamos tentando criar uma função para calcular um numero ao quadrado, porem se colocarmos somente o codigo dessa maneira o console ira retornar isso:

> [Function: quadrado]
- Isso acontece por que quando pedimos pro JavaScript mostrar o que agente experaria como o resultado da funçao na verdade ele vai mostrar a função em si, por isso temos que criar um retorno usando o `return` ele vai retornar o resultado da nossa função.
```
function quadrado (valor){
   return valor * valor;
}
const quadradoDeDez = quadrado(10)
console.log(quadradoDeDez)
```
 - Criamos uma varivavel pra armazernar o valor de retorno e usamos novamente a função.No console ira aparecer 
 > 100
 
- Podemos usar a função varias vezes:
``` 
function quadrado (valor){
   return valor * valor;
}
const quadradoDeDez = quadrado(10) + quadrado(10)
console.log(quadradoDeDez)
```
- Console vai mostrar:

> 200

- Outro exemplo: 
```
function juros(valor,percentualJuros){
    const valorDeAcrescimo = (percentualJuros/100)*valor;
    return valor + valorDeAcrescimo 
}
console.log(juros(100,10));
console.log(juros(100,15));
console.log(juros(100,20));
```
- Console: 
> 110
> 115
> 120

- Explicando o exemplo acima, estamos usando mais de um parametro seprando por uma virgula (_valor,porcentualJuros_) 
