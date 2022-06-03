function substituiPares (array){
    if (!array || !array.length){return -1} 
    for (let i = 0; i < array.length; i++) {
        if (array[i] !== 0 && array[i] % 2 === 0) {
            console.log(`Substituindo ${array[i]} para 0`);
            array[i] = 0;
        } else if (array[i] === 0) {
			console.log('Esse número já vale 0!');
		}
    }
    return array;
};

let arr = [0, 2, 4, 6, 10, 13, 25, 30];

console.log(substituiPares(arr));