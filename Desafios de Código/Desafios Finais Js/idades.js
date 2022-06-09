/*Faça um algoritmo para ler um número indeterminado de dados, contendo cada um, a idade de um indivíduo. 
O último dado, que não entrará nos cálculos, contém o valor de idade negativa. Calcular e imprimir a idade 
média deste grupo de indivíduos.*/

let count = 0;
let n = 0;
let soma = 0;

do{
  n = parseInt(gets())
  if(n>0){
    count+=1
    soma+=n}
}while (n > 0);

media=soma/count
print(media.toFixed(2));