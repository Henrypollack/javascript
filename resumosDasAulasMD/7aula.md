# DIO | 7 Aula JavaScript 
![alt img](https://i.imgur.com/jb335RH.png)
## Criando um Projeto com HTML/CSS para Listagem de Pokémon
### Adicionando normalize css no projeto
- Quando tem um site organizado existe um problema que pode acontrecer que e a diferença de interpetraçao entre navegadores, hoje em dia e mais comum em tamanho de telas diferentes celulares que usam o sistema antigo e assim por diante.
- Uma coisa importante para se colocar e um `normalize` no **CSS** ele normaliza todo o estilo inicial ou seja todo estilo padrao ele vai fica tudo normalizado assim ele automaticamente ajusta as margens para cada nevagador etc. 
- Isso faz com que nao precisamos ficar programando muitas divergencias etc. 
- Existem varios tipos de `normalize`porem hoje vamos usar o `normalize.css`.
- Acessamos o site e copiamos o link que esta na primeira linha e colamos ele no nosso `<head>`so de agente colar ele ja cria a tag de `<link>` que usamos normlamente para adcionar o arquivo CSS.
 - Apos isso podemos ter uma garantia que o nosso site vai fica igual em todos os navegadores.
 Ficndo assim no seu HTML.

 ```
 <!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Pokedex</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css" integrity="sha512-NhSC1YmyruXifcj/KFRWoC561YpHpc5Jtzgvbuzx5VozKpWvQ+4nXhPdFgmx8xqexRcpAglTj9sIBWINXa8x5w==" crossorigin="anonymous" referrerpolicy="no-referrer" />"

</head>
<body>
    
    
</body>
</html>
```
### Organizando o projeto
- Uma das peças chaves para se ter sucesso em um projeto e organizaçao, comecamos o nosso projeto adcionanado estilos e funcoes diretamente na pagina HTML mas assim fica muito desorganizado, por isso iremos organizar as coisas com uma pasta e vamos chamar ela de `assets` dentro dela vamos colocar uma pasta chamada de _**JavaScript**_ para nossos arquivos _**js**_ e outra chaada _**CSS**_ para guardar nosso rquivo em CSS, depois dentro dessas pastas irermos criar nossos arquios _**.css**_ e ._**js**_.
No terminal podemos digitar o seguinte comando abaixo.
###### Comando digitado
```
touch ./asets/css/global.css
```
- Explicando o codigo acima criamos o nosso primeiro arquivo CSS, com onome de `Global`por que e onde vamos colocar todos os nosso parametros globais nele (_ou seja parametros que irao ser seguidos pelo projeto inteiro nao somente por uma parte dele._)
- Depois vamos fazer o mesmo pro JavaScript, criando um arquivo `main.js``
###### Comando digitado
```
touch ./asets/css/main.js
```
- Mesma logica usada para nossos arquivos css, criamos um arquivo de JavaScript principal.
Agora para podermos usar nossos arquio no html e so usar o elemento `<link>` como no codigo abaxio
###### Comando digitado
```
<link rel="stylesheet" href="/assets/css/global.css">
<body>
<script src="/assets/javascript/main.js">

</script>
</body>
```
#### Adicionando a font Roboto no projeto
![alt img](https://i.imgur.com/Vf0sCua.png)

- Do mesmo jeito que podemos usar o `cdn`para normalizar nossa pagina, podemos usar ele para adcionar estilo ao nosso texto (_muda a fonte do texto_), para isso amos usar o _**Google Fonts**_ , Depois vamos buscar pela fonte `Roboto` e vamos selecionar algumas estilos de fontes, o depois na hora de apertar o botao `download all`podemos abertar o outro botao `view embed code`e la teremos ja o codigo em `CSS`e o nosso codigo pro `CDN`do proprio google.
Deixando o nosso `<head>` desse jeito:
###### Comando digitado
```
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Pokedex</title>
   <!--Normalize CSS -->
   <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css" integrity="sha512-NhSC1YmyruXifcj/KFRWoC561YpHpc5Jtzgvbuzx5VozKpWvQ+4nXhPdFgmx8xqexRcpAglTj9sIBWINXa8x5w==" crossorigin="anonymous" referrerpolicy="no-referrer" />"
    <!-- Font Roboto-->
    <link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700&display=swap" rel="stylesheet">
<!--Nosso CSS-->
<link rel="stylesheet" href="/assets/css/global.css">
    <title>Pokedex</title>
</head>
```
- No Primeiro link temos o `normalize`e nos outros temos o `CDN`do google das nossas fontes.
A melhor parte de usar CDN e que gasta servidor do google no nosso caso e nao o nosso servidor.
- Agora vamos aplicar nossa fonte no CSS fazendo da seguinte maneira.
###### Comando digitado
```
# {
    font-family: 'Roboto',sans-serif;
}
```

### Estilização inicial
- Vamos usar um metodo chamado _**mobile first**_ usamos essa tecnica por que teriamos que reescrever muito codigo para telas menores.
- Ao invez de usar pixel para colocar o espcamento do nosso title vamos colocar `1rem` que e o espcamento de um `M`na tela do usuario e ele ajusta isso automaticamente.
 - Usamos o `media querry`ou `media screen`para o nosso site funcionar em diferentes tamanhos de tela.

