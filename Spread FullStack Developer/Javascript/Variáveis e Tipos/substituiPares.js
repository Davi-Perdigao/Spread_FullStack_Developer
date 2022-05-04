function substituiPares (array){
    if (!array || !array.length){return -1} 
    for (let i = 0; i < array.length; i++) {
        if (array[i] !== 0 && array[i] % 2 === 0) {
            console.log(`Substituindo ${array[i]} para 0`);
            array[i] = 0;
        } else if (array[i] === 0) {
			console.log('Você já vale 0!');
		}
    }
    return array;
};

let arr = [0, 3, 4, 6, 80, 33, 23, 90];

console.log(substituiPares(arr));