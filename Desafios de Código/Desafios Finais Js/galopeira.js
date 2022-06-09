/*Sempre competindo para saber quem é o melhor, Capitão América e Homem de Ferro fizeram um desafio: quem digita mais rápido. 
Para isto, conseguiram um computador que não processa teclas pressionadas, ou seja, se for para digitar a mesma letra duas 
vezes seguidas, precisa pressionar a tecla duas vezes, visto que, pressionar a tecla por mais tempo, não adianta, e calcularam 
o tempo de uma tecla pressionada, que foi de um centésimo de segundo.

O desafio seria quem digitasse a palavra “galopeira”, formada por mais letras e, mas ambos eram muito bons e chegava num ponto 
que não era possível contar quantas letras haviam sido digitadas. Então, os super heróis pediram humildemente a sua ajuda para 
escrever um programa que verifique a palavra digitada e veja quanto tempo foi gasto para a digitação.

Escreva um programa que, dada uma palavra digitada, informe quanto tempo foi gasto para ser digitada.*/

let num = parseInt(gets())
let array = []

for (let i = 0; i < num; i++) {
  let C = String(gets())
  array.push(C)
  T=array[i].length/100
  print(T.toFixed(2))
}