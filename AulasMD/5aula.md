# DIO | 5ª Aula JavaScript  ![alt text](https://i.imgur.com/Y9owhBX.png, 'it works like magic')

## Importação e Exportação com JavaScript
- Quanto mais vai ficando complexo o nosso codigo mais difiicil fica para realizar a leitura por isso vamos aprender a _**encapsular**_ o nosso codigo e _**importar**_ um arquivo que contenha um script salvo. 
- Vamos criar um arquivo `funcoes auxiliares.js`
#### Criando a Função gets e print
- Temos duas funcoes chaves que são `gets`(_ele pega o input de alguem_) e o `print`(_que aplica um console.log e imprime a msg_)
Segue o codigo abaixo que vamosa usar como exemplo.
###### Comando digitado
```
function gets (){
    return 10;
}
function print(texto){
    console.log(texto);
}
```
- Criamos uma função `print` com a variavel `texto` que usando o `console.log` vai imprimir o que estiver na varivavel.
-Agora vamos importar esse codigo que criamos no arquivo _funcoes auxiliares.js_  pra o nosso arquivo _main.js_.
Para isso vamos usar o _require_ veja o codigo no exmplo abaixo.
###### Comando digitado
```
const funcoes = require('./funcoes_aux.js');
```
- Explicando, podemos salvar o require em uma variavel como no caso acima `funcoes` depois adcionamos o `require` e como o arquivo que a gente quer esta na mesma pasta entao usamos `./nome do arquivo`.
- Quando usamos o require nos importamos o que esta sendo exportado, ou seja tudo que esta la no arquivo `funcoes_aux.js`nao vai vir se nos nao dissermos pro JS exportar entao para isso nós iremos usar o seguinte comando `module.exports`. como no codigo abaixo.
###### Comando digitado
```
function gets (){
    return 10;
}
function print(texto){
    console.log(texto);
}

module.exports = {gets,print}
```
- No caso o `module` é um objeto o `exports`é um atributo do objeto, e ele sendo um objeto literal que contem 2 atributos que são funcoes.
Entao estamos exportando 2 objetos. Agora no nosso arquivo `main`podemos dar um console.log pra ver se esta tudo da meneira correta.
###### Comando digitado
```
const funcoes = require('./funcoes_aux.js');
console.log(funcoes);

```
###### O que vai aparecer no console
```
{ gets: [Function: gets], print: [Function: print] }
```
- Perceba que temos as funções `gets e print`em outro arquivo. se fizermos como no exmplo abaixo :
###### Comando digitado
```
const funcoes = require('./funcoes_aux.js');
console.log(funcoes.gets());

```
###### O que vai aparecer no console
```
10
```
- Ele vai retornar `10`pois e o que esta progrmaao para retornar no `gets` no arquivo `funcoes_aux.js`.
#### O Que é Object Destructuring
 - Quando a gente tem um objeto podemos fazer um _Object Destructuring_ que é a gente destruir um objeto.
 assim reduzindo o numero de linhas como no exemplo abaixo 
 ###### Comando digitado
```
const { gets,print }  = require('./funcoes_aux.js');
print(gets());
```
###### O que vai aparecer no console
```
10
```
- Aqui pegamos as duas funcoes do objeto e colocamos direto no objeto sem precizar atribuir uma variavel.
Perceba que funciona exatasmente igual antes.
- Recapitulando nos só _**importamos**_ o que esta sendo _**exportado**_ pelo outro arquivo.
#### Excercicio
  Uma sala contem 5 alunos e para cada  aluno foi sorteado um numero de 
 1 - 100 
faça um programa que receba os 5 numeros  sorteados para os alunos e mostre 
o maior sorteado.
**Dados de entrada:**
5,50,10,98,23
**Saida:** 98
##### _**Arquivo Main**_
###### Comando digitado
```
const { gets,print }  = require('../funcoes_aux.js');

const numerosSorteados = [];

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
print(maiorValor);
```
###### O que vai aparecer no console
```
98
```
- Explicando o codigo acima começamos importanto as funções do arquivo `funcoes_aux`, e criamos uma varivavel pra salvar os `numerosSorteados` e para trazer os numeros sorteados pra varivavel dele usamos a o `for` que vai **_interar 5 vezes_**, e cada vez que ele for interagir ele vai usa a varivavel `numeroSorteado`, que é o numero sorteado da vez, vai da um `gets`na lista do arquivo `funcoes_aux` depois vamos adcionar os numeros a nossa lista vazia que é os `numerosSorteados` usando o `push`.
- Agora abaixo vamos defenir o maior valor dos numeros sorteados criando uma varivavel `maiorValor` e depois vamos usar um `for` que vai conar a quantiade de interações atrves do tamanho da nossa lista de numeros sorteados, usando o `length` podemos fazer isso.
Depois uma varivael pra defnir dentro da função qual e o numero sorteado, usando como referencia a rodada que esta sendo executado o codigo (_no caso `i` _) depois usamos um `if`para dizer que se o numero sorteado for maior que o `maiorValor` (_no caso 0 por que ele começou recebendo 0_ ) o maior valor vai receber o numero sorteado.
##### _**Arquivo funcoes_aux**_
###### Comando digitado
```
const entradas = [5,50,10,98,23];
let i = 0;
function gets (){
    const valor = entradas[i];
    i++;
    return valor;
}
function print(texto){
    console.log(texto);
}

module.exports = {gets,print};
```
- Explicando o codigo acima no arquivo `funcoes_aux` temos a "fonte" da nossa função do arquivo `main` entao como da pra ver acima temos os 5 valores `[5,50,10,98,23]` salvos na variavel `entrada` logo em seguida temos a função `gets`adcionando um valor novo na losta entrada toda vez que é executado, e a função print dando `console.log`no texto.
- Depois exportamos as funções desjadas do arquivo.

#### Simplificando a Lógica
###### Comando digitado
```
const { gets,print }  = require('../funcoes_aux.js');
let maiorValorEncontrado = 0;
for(let i = 0; i<5;i++){
    const numeroSorteado = gets();
    if(numeroSorteado > maiorValorEncontrado)
        maiorValorEncontrado = numeroSorteado;
}
print(maiorValorEncontrado);
```
###### O que vai aparecer no console
```
98
```
- Explicando o codigo acima, podemos ambém fazer dessa maneira utilizando menos linhas de codigo, aqui ja começamos declarando o `maiorValorEncontrado` e depois usamos um for que vai interar 5 vzes e vai da um `gets`toda rodada e salvar na varivavel `numeroSorteado`
Depois comparamos ja se o numero que pegamos da lista e maior do que 0 pois a nossa varivavel `maiorValorEncontrado`ainda esta com 0 se ele for a varivavel vai receber o valor e assim por diante.
-Se trocarmos o 5 por uma varivavel como a de baixo:
###### Comando digitado
```
const numeroDeAlunos = gets();
```
- o `for` ira ficar dinamico ou seja nao limitado a cinco valores ficando o codigo da maneirqa abaixo: 
###### Comando digitado
```
for(let i = 0; i<numeroDeAlunos;i++){}
```

```
 ▲ 
▲ ▲ 
```
