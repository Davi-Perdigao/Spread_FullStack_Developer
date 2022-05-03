var currentNumberWrapper = document.getElementById('currentNumber')
var count = 0
var increment = document.getElementById('increment')
var decrement = document.getElementById('decrement')

// condição para contador funcionar 
// 0 <= count =< 10

increment.addEventListener("click",
    function increment(){
        count++;
        if(count <= 10){
            document.getElementById('increment').disabled = true;
        }
        if(count >= 0){
            currentNumberWrapper.style = "color: black;"
        }

    }
)

decrement.addEventListener("click",
    function decrement(){
        count--;
        if(count >= -10 ){
            currentNumberWrapper.innerHTML = count;
        }

        if(count < 0){
            currentNumberWrapper.style = "color: red;"
        }
    }
);