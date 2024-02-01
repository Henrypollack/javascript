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

- Explicando o exemplo acima onde estamos querendo criar uma função que aplica o juros automaticamente sobre o valor do produto, porem ao invez de pre firxar o valor do juros em 10% ou 15%, estamos usando mais de um parametro seprando por uma virgula (_valor,porcentualJuros_), pra que assim possamos editar o valor e o juros tendo assim uma função mais ampla,salvamos em uma varivavel a conta que a função juros faz com o valor e usamos o `return`pra que o rersultado da conta ou falando de uma maneira mais bonita expressão aritmetica.
---
#### Organizando o codigo
- Agora vamos organizar o nosso codigo sempre estruturando ele  usando o `main`, essa vai ser a parte principal do programa o codigo principal dele, podemos ter outras `function` fora do programa e chamar elas no programa `main`.
```
function calcularJuros(){

}

function main () {
    console.log('Programa principal')
    calcularJuros();
}
main();
```
- Funções no JavaScript são como valores que agente consegue manipular ou seja objetos.
Ou seja conseguimos colocar e chamar a função atraves de uma variavel ou usa uma função como parametro de oura função.
- Se colocarmos a função entre `()`ela sera executada primeiro, e como o que acontece na matematica `2+2(3+3)` onde o que esta em `()`e executado primeiro. 
- Podemos também ja invocar a função logo em seguida adcionando o `()` que teremos uma funcao auto invocada como no exemplo abaixo:
```
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

```
- Invocada quer dizer que ela foi chamada pra ser executada no codigo.
Podemos ate tirar o nome da função pois ela ja se auto invoca e quando ela esta assim nao conseguimos mais chamar ela pois ela esta `()`
Assim podemos isolar a função para ela ser executada uma vez só e isolamos o escopo dela tbm.

- Uma função acba sendo como um pequeno programinha que podemos chamar ou invocar a qualquer momento.
```
function escrevaMeuNome(nome){
    return 'Meu nome é ',nome;
}
escrevaMeuNome('Henry');
escrevaMeuNome('Pollack');

function verificarIdade (idade){
    if (idade >= 18) {
        console.log('Você é maior de idade ' + escrevaMeuNome('Henry'));
    } else {
        console.log('Você e menor de idade')
    }
     
}
verificarIdade(30);
```
- No codigo acima temos duas funções uma pra escrever o nome e outra pra ver se a pessoa e maior de 18 anos perceba que da pra invocarmos uma função dentro da outra desde que a função invocada esteja com `return` que vai dizer pro computador o que voce quer que a função retorne.
