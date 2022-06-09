/*A fórmula de Binet é uma forma de calcular números de Fibonacci.

Sua tarefa é, dado um natural n, calcular o valor de Fibonacci(n) usando sua fórmula.*/

let N = parseInt(gets());

let fib = ((((Math.sqrt(5)+1)/2)**N)-(((Math.sqrt(5)-1)/2)**N))/Math.sqrt(5)
print(fib.toFixed(1));