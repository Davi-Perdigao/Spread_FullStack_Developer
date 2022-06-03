# Módulos

Arquivos JavaScript com capacidade de **exportar**/**importar** informações de _outros arquivos_ do mesmo tipo.
Este repositório contém a atividade prática do Curso "Módulos", que faz parte do Basecamp de Javascript da [Digital Innovation One](https://digitalinnovation.one/).

## Exportar

### Named exports

```javascript
export function mostraIdade(pessoa) {
    return `A idade de ${pessoa.nome} é ${pessoa.idade}`;
}
export function mostraCidade(pessoa) {
    return `A idade de ${pessoa.nome} é ${pessoa.cidade}`;
}
export function mostraHobby(pessoa) {
    return `A idade de ${pessoa.nome} é ${pessoa.hobby}`;
}
```

```javascript
function mostraIdade (pessoa) {
return `A idade de ${pessoa.nome} é ${pessoa.idade}`;
}
function mostraCidade (pessoa) {
return A idade de ${pessoa.nome} é ${pessoa.cidade}`
};
function mostraHobby (pessoa) {
return `A idade de ${pessoa.nome} é ${pessoa.hobby}
}
export {
mostraIdade,
mostracidade,
mostraHobby
}
```

### Default exports

-   Só pode haver um por arquivo;
-   Retorno padrão do arquivo;

```javascript
function mostra Idade (pessoa) {
return `A idade de ${pessoa.nome} é ${pessoa.idade}`;
}
function mostraCidade (pessoa) {
return `A idade de ${pessoa.nome} é ${pessoa.cidade}`
};
function mostraHobby (pessoa) {
return `A idade de ${pessoa.nome} é ${pessoa.hobby}`
}
export {
mostraIdade,
mostraCidade,
}
export default mostraHobby;
```

## Importar

### Named exports

```javascript
import { funcao, variavel, classe } from "./arquivo.js";
```

### Default exports

```javascript
import valorDefault from "./arquivo.js";
```

#### Trocando nome de imports

```javascript
import { arquivo as Apelido } from "./arquivo.js";
Apelido.metodo();
```

### Importando todos os dados

```javascript
import * as INFOS from "./arquivo.js";
INFOS.metodoA();
console.log(INFOS.variavel);
```

## Vinculando ao HTML

```html
<script type="module" src="./main.js"></script>
```