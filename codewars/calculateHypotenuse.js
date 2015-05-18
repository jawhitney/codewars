function calculateHypotenuse(a, b) {
	if (isNaN(a) ||
		isNaN(b) ||
		typeof(a) !== 'number' ||
		typeof(b) !== 'number' ||
		a < 0 ||
		b < 0) throw 'Invalid variables';

	return Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2)).toFixed(3);
}

console.log(calculateHypotenuse(1,1)); // returns 1.414
console.log(calculateHypotenuse(3,4)); // returns 5
console.log(calculateHypotenuse(-2,1)); // throws error
console.log(calculateHypotenuse("one", "two")); // throws error
console.log(calculateHypotenuse(true, 4));
console.log( calculateHypotenuse(NaN, 5));