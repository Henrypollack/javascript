
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
## Incrementando um Objeto.

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
## Criando métodos para objetos.
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
- Podemos também acessar esses valores com uma sintaxe mais dinamica como no exemplo abaixo:
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
const atributo = 'idade';
console.log(pessoa['idade']);
```
###### O que vai aparecer no console
```
25
```
- Note que chamamos a idade com uma string e conseguimos referenciar mesmo assim, pois ela possui o mesmo nome do identificador.
- note também que no `console.log` citamos o objeto `pessoa` e dentro do colchetes `[]` colocamos a string que e identica ao identificador idade poderia ser assim tbm:
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
const atributo = 'idade';
console.log(pessoa['nome']);
```
###### O que vai aparecer no console
```
Henry Pollack
```
- Colocamos que queremos o `nome` e ele vai chamar o nome, assim deixamos o as coisas dinamicas dentro do nosso codigo entao se eu precisar acessar um atributo que nao sei o nome dele posso usar esse nome como parametro.
## Classe e Instancias 
- Classes guardam identificadores de por exemplo uma pessoa (_nome,idade_) de um carro (_cor,marca_), diferente do objeto acima que criamos que colocamos literalmente uma pessoa, 1 nome e 1 idade, na classe criamos algo que possa ser mais abrangente.
Nas classes temos as `Instâncias` que são como por exemplo o objeto que criamos acima. Se criarmos uma classe pessoa e colocar idade, nome e uma função descrever que vai impimir esses dois dados, o nome da pessoa (_Henry_) e a idade (_30_) seão as `Instâncias` dessa classe, veja melhor isso no exemplo abaixo:
###### Comando digitado
```
class Pessoa {
    nome;
    idade;
    charNoTibia;

    descrever(){
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}`);
    }
}

const henry = new Pessoa();
henry.nome = 'Henry Pollack';
henry.idade = 30;
henry.charNoTibia = 'Merdoxhero';

const filho = new Pessoa();
filho.nome = 'Heitor de Oliveira';
filho.idade = 0.9;
filho.charNoTibia = 'Milarra Luda';

console.log(henry);
console.log(heitor);
```
###### O que vai aparecer no console
```
Pessoa { nome: 'Henry Pollack', idade: 30, charNoTibia: 'Merdoxhero' }
Pessoa {
  nome: 'Heitor de Oliveira',
  idade: 0.9,
  charNoTibia: 'Milarra Luda'
}
```
- Explicando o exemplo acima, criamos entao o conceito pro JavaScript o que é uma pessoa ela tem idade nome e um personagem no tibia kkkk.
Perceba que para podermos usar a classe que criamos usamos entao o `const` com a variavel referente a pessoa e depois adcionamos o `new` + `nome da classe` seguido por `();` e depois vamos adcionando os atributos da pessoa.
- A classe acaba sendo isso e como o objeto deve ser e as Instancias são as caracteriticas. 
- Podemos chamar uma função criada dentro da classe assim como fazemos quando criamos uma dentro de um objeto como no exemplo abaixo:
###### Comando digitado
```
    nome;
    idade;
    charNoTibia;

    descrever(){
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}`);
    }
}
henry.descrever();
heitor.descrever();
```
###### O que vai aparecer no console
```
Meu nome é Henry Pollack e minha idade é 30
Meu nome é Heitor de Oliveira e minha idade é 0.9
```  
## Criando Instâncias com Construtor
- Quando criamos as classes acima vimos que nao era obrigatorio colocar todas Instâncias do objeto, para que seja obrigatorio por exemplo que o objeto pessoa sempre tenha um nome e uma idade usamos o `construtor(){}`, nele podemos defenir quais Instâncias desejamos que sempre apareçam quando formos criar um novo objeto.
Veja o exemplo abaixo:
###### Comando digitado
```
class Pessoa {
    nome;
    idade;
    NoTibia;
    constructor(nome,idade,charNoTibia){
        this.nome = nome;
        this.idade = idade;
        this.NoTibia = charNoTibia;
        this.anoNascimento = 2024 - idade;
    }

    descrever(){
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}`);
    }
}
const henry = new Pessoa('Henry Pollck',30,'Merdoxhero');
const filho = new Pessoa('Heitor',0.9,'Milarra Luda');

console.log(henry);
console.log(filho);
```
###### O que vai aparecer no console
```
Pessoa { nome: 'Henry Pollck', idade: 30, NoTibia: 'Merdoxhero' anoNascimento: 1994 }
Pessoa { nome: 'Heitor', idade: 0.9, NoTibia: 'Milarra Luda' anoNascimento: 2023.1 }
```
- Explicando no `construtor` iremos colocar o nome das Instâncias que sempre irão aparecer quando formos criar um novo objeto nesse caso pessoa, colocamos isso dentro do `()`.
- Depois vamos usar o `this` pra dizer pro JavaScript o que necessariamente o que colocamos entre `()`no `construtor` se referencia, veja que na Instâncias `charNoTibia`eu mudei para `NoTibia`apenas pra deixar isso claro.
- Perceba também que podemos adcionar também uma Instâncias que nao seja obrigatoria mais ela vai aparecer em todo os objetos do contrutor.
## Funções Recebendo Objetos
- Agora vamos fazer uma função que compara pessoas.
```
function compararPessoas(p1,p2){
    if (p1.idade > p2.idade){
        console.log(`${p1.nome} é mais velho(a) que ${p2.nome}`);
    } else if (p2.idade > p1.idade){
        console.log(`${p2.nome} é mais velho(a) que ${p1.nome}`);
    } else {
        console.log(`${p1.nome} e ${p2.nome} tem a mesma idade.`);
    }
}
```
- Perceba que criamos uma função e agora ao invez de estarmos usando variaveis estamos usando objetos. No caso ali temos o `nome`e a `idade`.
No exemplo abaixo fica mais claro. 
###### Comando digitado
```
function compararPessoas(p1,p2){
    if (p1.idade > p2.idade){
        console.log(`${p1.nome} é mais velho(a) que ${p2.nome}`);
    } else if (p2.idade > p1.idade){
        console.log(`${p2.nome} é mais velho(a) que ${p1.nome}`);
    } else {
        console.log(`${p1.nome} e ${p2.nome} tem a mesma idade.`);
    }
}
 const henry = new Pessoa('Henry',30,'Merdoxhero');
 const esposa = new Pessoa('Andressa',27,'Pele Fusion');

 compararPessoas(henry,esposa)

```
###### O que vai aparecer no console
```
Henry é mais velho(a) que Andressa
```
- Explicando o codigo, criamos uma função que quando chamamos ela vai comprar dois objetos entre si, entao perceba que criamos 2 pessoas, colocamos nome e idade e charNoTibia mas na funçao só vamos comparar idade e nome. Entao chamamos a função e colocamos as duas pessoas que criamos agora `henry` vai virar `p1` e `esposa`vai virar `p2` entao a função ira fazer as comprações.E seguir o codigo que programamos.  
