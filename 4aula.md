# DIO| 4ª Aula JavaScript ![alt text](https://i.imgur.com/qpcHkD3.png)
## Arrays e Estruturas de Repetição
### Listas e Arrays
- Um _array_ é uma coleção de dados em volta de `[]` entao ele pode armazenar string, booleans ou numeros etc...
como no exemplo abaixo:
###### Comando digitado
```
const alunos = ['Jõao','Henry','Maria'];
console.log(alunos)
console.log(alunos[0])
console.log(alunos[1])
```
###### O que vai aparecer no console
```
[ 'Jõao', 'Henry', 'Maria' ]
Jõao
Henry
```
- Perceba que fizemos uma lsta de nomes, chamamos ela de _alunos_ e exebimos ela logo em seguida mas também podemos acessar um elemento dessa lista usando o `indice`dela o indice e a posição do elemento na `array`e sempre começa por `0` no comando `console.log(alunos[1])` vemos que ao invez de chamar _'Jõao'_ ele chama o _'henry'_ por que ele e o segundo termo da lista e como começamos com `0`.
### Adicionando e Removendo Itens de Um Array
- Podemos também adcionar e remover itens de uma lista sem precisar ir ate ela e editar manualmente, podemos fazer com o seguinte comando:
###### Comando digitado
```
const alunos = ['Jõao','Henry','Maria'];
alunos.push('Heitor');
alunos[4] = 'Andressa';
console.log(alunos)
alunos[2] = 'Beatriz';
console.log(alunos)
```
###### O que vai aparecer no console
```
[ 'Jõao', 'Henry', 'Maria', 'Heitor', 'Andressa' ]
[ 'Jõao', 'Henry', 'Beatriz', 'Heitor', 'Andressa' ]
```
- Podemos adcionar um dado a uma `array`usando o comando `push` que vai adiconar o nome a ultima posição do `array` como também podemos adcionar indicando um novo _indice_ pro nosso dado como foi feito com a _Andressa_ **substituir** um dados indicando qual indice que ele esta como foi no caso da _'Beatriz'_.
- Usamos o mesmo raciocínio para remover um dado da lista porem usamos o comando `pop` como no exemplo abaixo:
###### Comando digitado
```
const alunos = ['Jõao','Henry','Maria'];

console.log(alunos);
console.log(alunos.pop());
console.log(alunos);
console.log(alunos.shift());
console.log(alunos);
```
###### O que vai aparecer no console
```
[ 'Jõao', 'Henry', 'Maria' ]
Maria
[ 'Jõao', 'Henry' ]
Jõao
[ 'Henry' ]
```
- Também podemos usar o `shift`para remover o primeiro dado da `array` como mostra o exemplço acima.
- Caso quewiramos saber quantos dados tem uma lista caso ela seja uma lista dinamica ou seja frequentemente vai ser adcionado dados podemos usa o `lenght`ele ira contar quantos dados temos na lista como no exemplo abaixo:
 ###### Comando digitado
```
const notas = [];
notas.push(5);
notas.push(7);
notas.push(8);
notas.push(2);
notas.push(5);

console.log(notas.length);
```
###### O que vai aparecer no console
```
5
```
### Estruturas de Repetição For
```
for (let index = 0; index < Array.length; index++){
    
}
```
- O comando `for`serve pra percorrer uma quantiade espcifica de vezes ou seja é você ou o usuario que determina qwuantas vezes essa repetição vai acontecer,Agora digamos que ao invez de adcionar nota por nota manualmente vamos progrmaar um codigo para fazer isso.
- O `for` e divido em 3 partes
#### 1ª Declaração
- Que diz a quantiade de vezes que vamos executar o codigo.
```
for (let index = 0;){
    
}
```
#### Estrutura Condicional 
- Que vai dizer se entra ou nao nesse codigo 
```
for (index < Array.length;){
    
}
```
#### Incremento da variavel
- O que acontece depois de executar o codigo.
```
for (index++){
    
}
```

- Começamos com a declaração do ponto de partida poderia ser 1000 ou 500 mas normlamente começamos do `0`, também trocamos normlamente a palavra `index`pela letra `i` por que é o nosso `interable` nosso `index`como veremos abaixo.
```
for (let i = 0; i < 10; i++){

}
```

- Agora vamos usar o for em outro exemplo como no codigo abaixo:
###### Comando digitado
```
const nome = 'Henry Pollack '
for (let i = 0; i < nome.length; i++){
    console.log(nome[i]);

}
```
###### O que vai aparecer no console
```
H  P
e  o
n  l
r  l
y  a
   c
   k
   /Coloquei do lado para fica mais facil a visualiozação.
```
- Explicando o exemplo acima , na primeira parte do codigo dizemos que estamos comecando do indice _0_ ou seja a primeira letra na segunda parte dizemos que o `i ` nao pode ultrapassar a quantiade de letras da string, sabemos a quantiade de letrras da string usando o comando `lenght` e depois dizemos que o `i `ira receber uma adição de contagem a cada vez que executar, entao ele vai escrever uma letra por vez no console cada linha é uma execução do codigo por isso ele escrevu o nome na vertical e nao na horizontal.

