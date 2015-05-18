function min(arr, toReturn) {
	var value = Math.min.apply( Math, arr );

	if (toReturn === 'value') {
		return value;
	} else if (toReturn === 'index') {
		return arr.indexOf(value);
	}
}

console.log(min([6,2,3,4,5], 'value'));
console.log(min([6,2,3,4,5], 'index'));
