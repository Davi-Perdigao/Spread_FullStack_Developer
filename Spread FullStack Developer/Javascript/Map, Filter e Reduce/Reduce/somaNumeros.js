function somaNumeros(arr) {
	if (!arr || !arr.length) return;
	const soma = arr.reduce((prev, curr) => prev + curr);

	return soma;
}
console.log('Soma dos números do Array:', somaNumeros([1, 1, 1, 3]));