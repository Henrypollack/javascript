# DIO | 6ª Aula JavaScript ![alt img](https://i.imgur.com/6bPZreN.png "e la vamos nos")
## Introdução ao Desenvolvimento Web com JavaScript
### Configurando o Ambiente
- Primeira coisa vamos verificar a versao do node, podemos fazer isso digitando no terminal `node - v` assim vamos conseguir saber a versao do _node.js_ apos isso, vamos adcionar um modulo ao nosso _node.js_ usando o comando abaixo. 
##### Comando Digitado
```
npm install -g http-server
```
- Ali estamos pedindo pro npm que e o gerenciador de modulos do node.js para instalar o `http-server`globalmente ou seja para todos usuarios.
- Nos vamos fazer um projeto de uma _**Pokedex**_ para isso amos criar a nossa pasta _**Pokedex**_ usando o comando `mkdir`.
- Apos isso podemos ja criar o nosso arquivo `html`usando o comando `touch` como no codigo abaixo.
##### Comando Digitado
```
mkdir Pokedex
touch index.html
```
- Apos isso podemos digitar html no _VSCode_ e apertar `tab` que ele vai deixar preenchido automaticamente os parametros padrao de um arquio em html, vamos modificar o titulo para Pokedex e colocar no corpo do arquivo 'teste'so para podemermos ver como fica quando formos abrir ele no google chrome ou edge.
##### Comando Digitado
```
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Pokedex</title>
</head>
<body>
    <h1>Teste</h1>
    
</body>
</html>
```
### Protocolo cliente servidor
- Como funciona, um cliente vai fazer uma requisicao ao servidor, o servidor processa a requisicao e devolve uma resposta, no caso estamos trabalhando com o protrocolo _http_ e quando abrimos um site pode ter tbm o _https_ o _s_ indica que o site tem as informacoes criptografadas.
- No caso aqui vai ser nos que vamos iniciar o nosso servidor, para fazer isso vamos digitar o comando abaixo:
 ##### Comando Digitado
```
http-server ./
```
- Explicando estamos dizendo que queremos abrir o nosso arquivo html com o http-server o comando `./`quer dizer que o documento esta nessa pasta.
- O html nada mais que uma linguagem de marcacao dd texto e um documento word porem com semantica.
- O CSS e o estilo do nosso texto.O singnificado de CSS e `Cascading Style Sheets` por que sua leitura e feito em cascata.
### Introdução ao JavaScript voltado para web
- O JavaScript e o que da comportamento pro nosso site, ou sewja acooes interacoes etc.
Para colocarmos JS no nosso site podemos usar a a tag `<script></script>` apos isso podemos fazer como fazimos nos arquios .js
Veja o codigo abaixo:
##### Comando Digitado
```
<script>
        const btnTeste = document.getElementById("btnTeste")
        btnTeste.addEventListener("click",function(){
            console.log('Oi boi')
        })
    </script>
```
- Declaramos uma variavel para e depois usamos o `document`para podermos pegar um elemento desse `html`e usamos o `getElementById` para dizer que quqeremos umn elemento pela _**ID**_ dele depois vamos dizer qual evento que faz o nosso botao funcionar no caso o click do botao, para isso usamos o `addEventListener`e depois que colocamos o `'click'` colocamos a funcao que ele vai executar ali no caso um console log com a mensagem desejada.
