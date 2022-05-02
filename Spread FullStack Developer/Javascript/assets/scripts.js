const reset = document.querySelector(".reset");
const currentNumber = document.getElementById("currentNumber");

changeColor = function (n = 0) {
    if (n != 0 && n != 10 && n != -10) {
        currentNumber.style.color = n < 0 ? "#164E63" : "#8EC1D6";
    } else if (n === 10 || n === -10) {
        currentNumber.style.color = "#DA1F50";
    } else {
        currentNumber.style.color = "#cbd5e1";
    }
};

increment = () => {
    if (Number(currentNumber.textContent) < 10) {
        currentNumber.textContent = Number(currentNumber.textContent) + 1;
        changeColor(Number(currentNumber.textContent));
    }
};

decrement = () => {
    if (Number(currentNumber.textContent) > -10) {
        currentNumber.textContent = Number(currentNumber.textContent) - 1;
        changeColor(Number(currentNumber.textContent));
    }
};

reset.addEventListener("click", function () {
    currentNumber.textContent = 0;
    maxValueReached = false;
    changeColor();
});