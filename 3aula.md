
# DIO| 3ª Aula JavaScript
![alt text](https://i.imgur.com/R9X42o2.png)
## Estrutura Básica de Um Objeto
- Um objeto pode ser um `console.log` ou um `const variavel = {}` repare que usamos `{}`para chamar um objeto. 
- Um objeto no JavaScript e uma coleção dinamica de chave e valores e ele funciona com `{}`e valor como no exemplo abaixo:
```
const henry  = {
    nome: 'Henry Pollack',
    idade: 25,
    nivelDoCharNoTibia: 248
};
```
- No exemplo acima vemos a sintaxe de um _objeto literal_. Podemos usar os objetos de forma parecida que usamos as funções, no exemplo abaixo usamos o `console.log`para exebir as informações que desejamos, idade ou nome.
```
console.log(henry.nome);
console.log(henry.idade);
console.log(henry.nivelDoCharNoTibia);
```
##### Vai aparecer no console isso daqui 
```
Henry Pollack
25
248
```
- Lembrando pessoal que sempre ao adcionar novos valores nao esquecer da `,`no final de cada valor somente no ultimo que nao precisa.
E Quando for chamar a função usamos o `.`.
- Também podemos dar um `console.log` em tudo ira aparecer no console isso 

###### Comando digitado
``` 
console.log(henry);
```
###### O que vai aparecer no console
```
{ nome: 'Henry Pollack', idade: 25, nivelDoCharNoTibia: 248 }
``` 
#### Incrementando um Objeto.

- Podemos **_incrementar_** ou seja colocar mais coisas no bojeto citando ele e colocando um `.`e depois o atributo que queremos que ele receba como no exemplo abaixo. 
###### Comando digitado
```
henry.altura = 1.76;
```
###### O que vai aparecer no console
```
{
  nome: 'Henry Pollack',
  idade: 25,
  nivelDoCharNoTibia: 248,
  altura: 1.76
}
```
- Podemos também deletar um atributo do nosso objeto como no comando abaixo:
###### Comando digitado
```
delete henry.nome;
```
###### O que vai aparecer no console
```
{ idade: 25, nivelDoCharNoTibia: 248, altura: 1.76 }
```
#### Criando métodos para objetos.
- Podemos criar metodos pros objetos que são funções dentro de objetos. Uma função dentro de um objeto chamamos de metodo.
Podemos usar na função as variaveis que estao dentro do objeto.

- E quando estamos executando uma função dentro de um objeto podemos usar uma palavra reservada que é o `this`, ele diz respeito ao contexto a onde essa função esta sendo executada. Como a função foi criada dentro de um objeto o `this`assume o objeto. pra entender melhor vamos ver o exemplo abaixo: 
###### Comando digitado
```
const henry  = {
    nome: 'Henry Pollack',
    idade: 25,
    nivelDoCharNoTibia: 248,
    descrever: function () {
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}`);
    }
};
henry.descrever();
```
###### O que vai aparecer no console
```
Meu nome é Henry Pollack e minha idade é 25
```
---
#### Detalhe importante
- Um detalhe super importante que não e citado na aula é que quando vamos usar o `console.log`usando o `this` ao invez de `'` aspas simples iremos usar um " `" um acento grave.
----
- Depois disso chamaos o objeto pelo seu nome e logo em seguida sua função no exemplo acima o nome do objeto `henry`e a função `descrever`.
Vou adcionar mais um exemplo pra melhorar a compreensão
###### Comando digitado
```
const pessoa  = {
    nome: 'Henry Pollack',
    idade: 25,
    nivelDoCharNoTibia: 248,
    descrever: function () {
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}`);
    }
};
pessoa.nome = 'Heitor';
pessoa.idade = 0.9;
pessoa.descrever();
```
###### O que vai aparecer no console
```
Meu nome é Heitor e minha idade é 0.9
```
- Entao a gente atualizo os dados do objeto por outros no caso o nome do meu filho `Heitor`e o `0.9` idade dlee que seria 9 messes kkkk.
- Podemos também sobreescrever o objeto.
###### Comando digitado
```
const pessoa  = {
    nome: 'Henry Pollack',
    idade: 25,
    nivelDoCharNoTibia: 248,
    descrever: function () {
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}`);
    }
};
pessoa.descrever = function(){
    console.log(`Meu nome é ${this.nome}`)
}
```
###### O que vai aparecer no console
```
Meu nome é Heitor
```
- Nesse caso ao invez da função do objeto trazer idade e nome vai trazer só a idade pois reatribuimos a sua função sobrescrevendo ela novamente.