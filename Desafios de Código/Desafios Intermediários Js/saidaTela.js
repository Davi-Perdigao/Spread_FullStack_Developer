/*O seu instrutor de lógica de programação, Damilson Bonetti, quer que você desenvolva uma tela com as seguintes características:

Conter 39 traços horizontais ( - ) na primeira linha;
Conter um traço vertical ( | ) embaixo do primeiro traço e do trigésimo nono traço da primeira linha, preencher no meio com espaço em branco;
Repita o procedimento 2 quatro vezes;
Repita o procedimento 1.
No final deve ficar igual a imagem a seguir:

--------------------------------------- (39 traços)

|                                     |

|                                     |

|                                     |

|                                     |

|                                     |

--------------------------------------- (39 traços)*/

var resultado = "";
  for (i = 1; i <= 7; i++) {
    for (j = 1; j <= 39; j++) {
      if (i == 1 || i == 7)
        resultado += "-";
      else if (j == 1 || j == 39)
        resultado += "|";
      else 
        resultado += " ";
      }
      resultado += "\n";
  }
console.log(resultado);