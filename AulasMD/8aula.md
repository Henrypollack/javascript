# DIO | 8ª Aula JavaScript ![alt img](https://i.imgur.com/h3RKN7J.png)
## Dominando o Protocolo HTTP e Integrando com a PokeAPI
### Introdução a APIs
- Uma `API` é um _web service_ mas nao deixa de ser um servidor fornecendo dados, e uma interface de progrmaçaõ de aplicativos.
### Como funcionam as requisições
- As requisições e o relacionamento cliente servidor, que são as solicitações que o cliente faz pro servidor.
### URL Path e Method
- Pra montarmos uma requisições `HTTP` nó temos a nossa `URL`e nele temos o `Path` vai dizer o _**IP e porta do servidor** _ e o endereço do recurso que a gente quer.
- A Nossa URL e composta de IP/Path.
```
Requisição HTTP
URL: https://pokeapi.co/api/v2/pokemon
    ${IP}/${path} = caminho de identificação do recurso usado

IP: https://pokeapi.co
Caso voce local seria assim
https://127.0.0.1:8080

Path: /api/v2/pokemon
Traduzindo nesse servidor aqui eu quero a API na  versao2 e eu quero o pokemon.
```
- Outra coisa importante e o tipo de solicitação que estamos fazendo, temos varios tipos de solicitação como o `get` que é um tipo de `Request Method`
```
Request Method: GET| POST| PUT| DELETE| PATCH
```
- Toda requisição para um recurso o metodo diz a requição desse recurso.
### Path Params e Query String

