# DIO| 1ª Aula de JavaScript
### Como declarar variaveis
- Para mostrarmos alguma msg no JavaScript usamos o seguinte comando:
```
console.log()
console.log('Hello Word')
```
- No JavaScript para declarar uma variável usamos o comando `let`. No `let` podemos atualizar a varivavel depois de criar la.
```
let variavel = 10;
variavel = 20;
``` 
- Temos o `const` que é um valor constante e nao pode ser alterado depois de delcarado.
```
const pi = 3,14;
```
- Caso o resultado de um algoritmo de com muitas casas decimais temos que converter o resultado pra texto.
Usando o `toFixed`podemos fazer isso.
```
console.log("O seu carro gastou R$: ",gasto.toFixed(2));
```
- O console vai mostrar isso:
```
O seu carro gastou R$:  762.35
```
- ao inves disso:
```
O seu carro gastou R$:  762.3499999999999
```
- Podemos trabalhar também comn valores `booleanos` os famosos `True`(_verdadeiro_)
ou `False`(_Falso_).
```
const souRico = False;
const souPobre = True;
```
- Temos também os sinais aritmeticos.

|Simbolo|Operação  | Exemplo|
|-------|----------|--------|
|     **+** | Soma| 5 + 4 = 9|
|      **-**| Subtração| 5 - 4 = 1|
|     **/**|Divisão|  4 / 2 = 2|
|     **'*'**|Multiplicação| 5 * 4 = 20| 
|      **%**|Resto de Divisão| 21 % 4 = 1|
|   **' ** '**|Expoente| 2 * * = 4|

---
- Pra podermos ver igualdade entre valores '`===`'
Se usarmos `=`ele vai atribuir um valor a uma variavel 
Se usarmos o `==` o progrma faz a conversao de texto pra numero ou seja se voce tiver um numero em formato de string ele tenta converter ela pra numero como no exemplo abaixo.
```
const numeroPar = (numero % 2) == '0';
```
- Acima ele vai entender que o '`0`' que esta em formato de texto por causa das `''`, vai virar um numero.
-Também podemos usar ! para dizer que algo nao é giaul alguma coisa ! serve pra ser usado como negação como no exemplo abaixo que só vai imprimir o numero se ele **nao** for numero par.
```
const numero = 10;
const numeroPar = (numero % 2) === 0;
if (!numeroPar) {
     console.log('Impar')
}
```


#### Condicionais IF & ELSE
- Temos também as condiconais `if`(_se_) `else`(_senao_), que usam a seguinte sintaxe.No `if`os comandos só são excutador se for valor `'True'` ou atender a exigencia que foi colocada o `else` vai depois do `if` que serve caso a primeira exigencia nao seja atendida faça isso.
```
if (numeroPar) {
     console.log('Par')
}
```
- Para nao termos que colocar um outro `if` para dizer que o numero é impar vamos usar o `else`.
```
if (numeroPar) {
    console.log('Par');
} else {
    console.log('Impar');
}
```
- Podemos usar também o `else if` que serve como uma erciera verificação digamos assim como por exemplo.
```
if (numero === 0) {
    console.log('O Numero é invalido');
} else if (numeroPar) {
    console.log('Par');
} else {
    console.log('Impar');
}
```
- Ficando assim primeiro vemos se o numero é igual a zero caso ele seja apresentamos a primeira mensagem, se nao for e ele for par ai apresentamos a segunda mensagem caso nao seja vamos pra terceira mensagem.
 - No JavaScript usamo os `&&` pra usar a função `AND`o famoso `E` 



