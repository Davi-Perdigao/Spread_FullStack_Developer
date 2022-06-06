/*Você recebeu o desafio de ler um valor e criar um programa que coloque o valor lido na primeira 
posição de um vetor N[10]. Em cada posição subsequente, coloque o dobro do valor da posição anterior. 
Por exemplo, se o valor lido for 1, os valores do vetor devem ser 1,2,4,8 e assim sucessivamente. Mostre o vetor em seguida.*/

const input = gets();
let a = input;

for (let i = 0; i < 10; i++) {
  print(`N[${i}] = ${a}`);
  a = a * 2;
}