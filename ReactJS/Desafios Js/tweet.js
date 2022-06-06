/*O microblog Twitter é conhecido por limitar as postagens em 140 caracteres. 
Conferir se um texto vai caber em um tuíte é sua tarefa.*/

let T = gets();

print((T.length <= 140) ? "TWEET" : "MUTE");