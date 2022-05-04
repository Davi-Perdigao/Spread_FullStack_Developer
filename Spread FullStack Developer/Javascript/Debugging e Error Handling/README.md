# Debugging & Error Handling (Tratamento de Erros)

Definições e projetos referentes ao curso "Debugging & Error Handling (Tratamento de Erros)" da [Digital Innovation One](https://digitalinnovation.one/).

## Throw

A declaração **throw** lança uma exceção definida pelo usuário. A execução da função atual vai parar (as instruções após o **throw** não serão executadas), e o controle será passado para o primeiro bloco [catch](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Statements/try...catch) na pilha de chamadas. Se nenhum bloco **catch** existe entre as funções "chamadoras", o programa vai terminar.

### Sintaxe

```javascrip
throw expressão;
```

-   **expressão**: expressão a ser lançada

### Exemplo:

```javascript
function verificaPalindromo(string) {
    if (!string) return "String inválida";
    return string === string.split('').reverse( .join('');
}
verificaPalindromo('cat');
```
## Try/Catch
As declarações **try...catch** marcam um bloco de declarações para testar (**try**), e especifica uma resposta, caso uma exceção seja lançada.
### Sintaxe:
```javascript
try {
   try_statements
}
[catch (exception_var_1 if condition_1) {
   catch_statements_1
}]
...
[catch (exception_var_2) {
   catch_statements_2
}]
[finally {
   finally_statements
}]
```
-   **try_statements**: Declarações (statements) a serem executadas.
-   **catch_statements_1, catch_statements_2**: Declarações executadas caso uma exeção seja lançada no bloco **try**.
-   **exception_var_1, exception_var_2**: Identificador que leva um objeto exceção para uma cláusula **catch** associada.
-   **condition_1**: Expressão Condicional.
-   **finally_statements**: Declaração executada independetemente se uma exceção foi ou não lançada ou capturada.
### Exemplo:
```javascript
function verificaPalindromo(string) {
    if (!string) throw "String inválida";
    return string == string.split("").reverse().join("");
}
function tryCatchExemplo(string) {
    try {
        verificaPalindromo(string);
    } catch (e) {
        console.log(e); // throw e; mostra erro como alerta.
    }
}
tryCatchExemplo("");
```
## Error
**Error** cria um objeto de erro. Instâncias de objetos **Error** são lançadas quando erros de tempo de execução ocorrem. O objeto **Error** também pode ser usado comoobjeto base para exceções definidas pelo usuário.Veja abaixo tipos de erro padrões embutidos.
### Sintaxe
```javascript
new Error([message[, fileName[, lineNumber]]])
```
-   **message (opcional)**: Descrição do erro legível para humanos.
-   **fileName (opcional)**: Valor da propriedade **fileName** no objeto de erro criado. O padrão é o nome do arquivo contendo o código que chamou o construtor de Error().
-   **lineNumber (opcional)**: Valor da propriedade **lineNumber** no objeto **Error** criado. O padrão é o número da linha contendo a invocação do construtor Error().
### Exemplos:
```javascript
new Error(message, fileName, lineNumber); // todos os parâmetros são opcionais
const MeuErro = new Error("Mensagem Inválida");
throw MeuErro;
//Resultado:
//Uncaught Error: Mensagem Inválida
//    at <anonymous>:1:17
//  (anonymous) @ VM60:1
```
```javascript
const MeuErro = new Error("Mensagem Inválida");
MeuErro.name = "InvalidMessage";
throw MeuErro;
//Resultado:
//Uncaught invalidMessage: Mensagem Inválida
//  at <anonymous>:3:17
//(anonymous) @ VM237:3
```

## Atividade: validação de erros por tipo

O objetivo é que a função receba um array e retorne ele caso o seu tamanho corresponda ao número enviado como parâmetro na função. Caso contrário, um erro será lançado.

- Crie uma função que recebe um array e um número
- Realize as seguintes validações
  - Se os parâmetros não forem enviados, lance um erro do tipo `ReferenceError`
  - Se o array não for do tipo 'object', lance um erro do tipo `TypeError`
  - Se o número não for do tipo 'number', lance um erro do tipo `TypeError`
  - Se o tamanho do array for diferente do número enviado como parâmetro, lance um erro do tipo `RangeError`
- Utilize a declaração `try...catch`
- Filtre as chamadas de catch por cada tipo de erro utilizando o operador `instanceof`

## Links Auxiliares

- [Objeto Error](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Error)
- [instanceof](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Operators/instanceof)
- [typeof](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Operators/typeof)
- [try...catch](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Statements/try...catch)