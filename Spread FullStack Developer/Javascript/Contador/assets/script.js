var currentNumberWrapper = document.getElementById('currentNumber')
count = 0;
var increment = document.getElementById('increment')
var decrement = document.getElementById('decrement')

/*Tente implementar os eventos usando o método addEventListener.
Crie condicionais que desabilitam o botão de incrementar ou decrementar quando count chegar a um determinado valor.
Mude a cor do texto em CURRENT_NUMBER para vermelho quando o número for negativo.
*/

increment.addEventListener("click",
    function increment(){
        if (Number(currentNumber.textContent) < 10) {
            count ++;
            currentNumber.textContent = Number(currentNumber.textContent) + 1;
            if (count >= 0){
                currentNumberWrapper.style = "color: black;"
            }
        }

    }
);

decrement.addEventListener("click",
    function decrement(){
        if (Number(currentNumber.textContent) > -10) {
            count --;
            currentNumber.textContent = Number(currentNumber.textContent) - 1;
            if (count < 0){
                currentNumberWrapper.style = "color: red;"
            }
        }
    }
);