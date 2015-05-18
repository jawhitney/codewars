function zeroFill(number, size) {
	number = Math.abs(~~number); // whole positive integer

	while (number.toString().length < size) {
		number = '0' + number;
	}

	return number;
}

console.log(zeroFill(11,5));
console.log(zeroFill(11,11));
console.log(zeroFill(-32,5));
console.log(zeroFill(0,3));
