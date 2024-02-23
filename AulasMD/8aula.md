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
- Toda vez que quero passa uma informação eu tenho que informar se eu quero criar modifica ou enviar ou solicitar uma informação, a _**primeira area**_ de tranferencia de dados que nos temos e o proprio `PATH` ai temos a _**segunda area**_ de tranferencia de dados `Query String` que é uma descrição de busca, toda vez que eu faço um `get` quer dizer que qero buscar alguma coisa, ai sempre passamos algum parametro para filtrar essa busca. 
- A `Query String`sempre vai ser uma estreutura de chave e valor, como no exemplo abaixo onde solicitamos Pokemons do tipo grama.
###### Comando digitado
```
URL: https://pokeapi.co/api/v2/pokemon?type=grass
     https://pokeapi.co/api/v2/pokemon?type=grass&name=i  
```
- Explicando a segunda linha caso queiramos mais uma coisa no filtro podemos contatenas usarndo o & ali no exemplo `&name=i`seria pra procurar também nomes que comecem com `i`.
Assim conseguimos passar argumentos pras buscas.
### Headers
- Se observamos bem temos o _**Request Headers**_ e _**Response Headers**_ que são a configuração da nossa API ou site 
- São areas de dados que podemos transmitir coisas pro servidor e recber coisas do servidor, os `Headers` normalmente são metadados da nossa requisição são coisas para descrever ou complementar a nossa requisição. 
- Os `Headers`são uma especie de configuração da nossa requisição.
### Body e Status Code
- O `Body`e o corpo da nossa requisição. por exemplo o `GET`nao tem corpo de requisição ele deve funcionar com a URL q  querry e os headers de resquest, agora quando e `POST` sim como no exemplo abaixo:
###### Comando digitado
```
Requisição HTTP 

URL: https://pokeap1.co/api/v2/pokemon 
${Endereço}/${path = caminho de identificação do recurso) 

Request Method: GET | POST | PUT | DELETE 

Request Headers content-type: application/json 

Body{
"name:"Teste"
} 
```
- O que vai no `Body`depende do _content type_ que esta no header. E o body pode ter tanto na requisição como na reposta.

### Requisição
- Uma requisição e composta por `URL`, `Request Method` , `Request Headers`, `Response Headers` como no exemplo abaixo.
###### Comando digitado
``` 
Requisição HTTP

URL: https://pokeapi.co/api/v2/pokemons
{Endereço}/${path caminho de identificação do recurso}

Request Method: GET | POST | PUT | DELETE

Request Headers
content-type: application/json

Resquest Body
{
"name": "Teste"
}
```
### Response
- E na parte do servidor vamos ter o `Status Code`, `Response Headers`, `Response Body`.
###### Comando digitado
```
Status Code: 200 OK

Response Headers

Response Body
```

### Status Code
- Ele singifica o que aconteceu com a nossa requisição se ela foi processada, ou nao  ou deu errado ou se deu sucesso.
- A familia `200` (_200-299_) costuma dizer sucesso, a familia `300` (_300-399_) Redirect, a familia `400`(400-499) erro por parte do clinete, a famlia `500`erro por parte do servidor etc.
