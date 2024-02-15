# DIO | 5ª Aula JavaScript ![alt text](https://i.imgur.com/Y9owhBX.png, 'it works like magic')
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
