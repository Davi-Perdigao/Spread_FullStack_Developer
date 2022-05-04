# JavaScript Assíncrono

Este repositório contém a atividade prática do Curso "Javascript Assíncrono", que faz parte do Basecamp de Javascript da [Digital Innovation One](https://digitalinnovation.one/).

## Atividade: API "catAPI"

Nesta atividade, vamos criar uma página que carrega fotos aleatórias de gatinhos sempre que clicamos em um botão.

1. Utilize a API `https://thatcopy.pw/catapi/rest` para fazer as chamadas com o método `fetch()`;
2. Utilize seus conhecimentos na manipulação do DOM para criar a imagem e ativar o evento de clique do botão!

## Demo

![catAPI](./api-cats.gif)


## Promises

-   Objeto de processamento assíncrono.
-   Inicialmente, seu valor é **desconhecido**. Pode então ser, resolvida ou rejeitada.
-   Estados: 1) Pending, 2) Fulfilled, 3) Rejected.

### Exemplos

```javascript
const myPromise = new Promise((resolve, reject) => {
    window.setTimeout(() => {
        resolve(console.log("Resolvida!"));
    }, 2000);
});
```

## Async/await

-   Funções assíncronas precisam dessas duas palavras chave.

```javascript
async function resolvePromise() {
  const myPromise = new Promise((resolve, reject) => {
    window.setTimeout(() => {
        resolve( 'Resolvida');
    }, 3000);
});
  const resolved = await myPromise
      .then((result) => result + ' passando pelo then')
      .then((result) => result + e agora acabou!)
      .catch((err) => console.log(err.message));
  return resolved;
}
// Após 0 segundos, retornará o valor
// "Resolvida passando pelo then e agora acabou!"
```

## Fetch

-   Consumindo APIs
-   Operações (GET, POST, PUT, DELETE)

### Sintaxe

```javascript
fetch(url, options)
    .then((response) => response.json())
    .then((json) => console.log(json));
// retorna uma Promise
```

### Exemplo

```javascript
fetch("https://endereco-api.com/", {
    method: "GET",
    cache: "no-cache",
}).then((response) => response.json());
then((json) => console.log(json));
// retorna uma Promise
```

```javascript
fetch("https://endereco-api.com/", {
    method: "POST",
    cache: "no-cache",
    body: JSON.stringify(data),
})
    .then((response) => response.json())
    .then((json) => console.log(json));
// retorna uma Promise
```

## Atividade: API "catAPI"

Nesta atividade, vamos criar uma página que carrega fotos aleatórias de gatinhos sempre que clicamos em um botão.

1. Utilize a API `https://thatcopy.pw/catapi/rest` para fazer as chamadas com o método `fetch()`;
2. Utilize seus conhecimentos na manipulação do DOM para criar a imagem e ativar o evento de clique do botão!

## Demo

![catAPI](./api-cats.gif)