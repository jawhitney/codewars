Array.prototype.square = function() {
	return this.map(function(n) {
		return n * n;
	});
};

Array.prototype.cube = function() {
	return this.map(function(n) {
		return n * n * n;
	});
};

Array.prototype.average = function() {
	if (this.length > 0) {
		return this.sum() / this.length;
	} else {
		return Number.NaN;
	}
};

Array.prototype.sum = function() {
	if (this.length > 0) {
		return this.reduce(function(prev, curr) {
			return prev + curr;
		});
	} else {
		return 0;
	}
};

Array.prototype.even = function() {
	var result = [];

	for (var i = 0; i < this.length; i++) {
		if (this[i] % 2 == 0) result.push(this[i]);
	}

	return result;
};

Array.prototype.odd = function() {
	var result = [];

	for (var i = 0; i < this.length; i++) {
		if (this[i] % 2 != 0) result.push(this[i]);
	}

	return result;
};

var numbers = [1,2,3,4,5];
console.log(numbers.square()); // must return [1, 4, 9, 16, 25]
console.log(numbers.cube()); // must return [1, 8, 27, 64, 125]
console.log(numbers.average()); // must return 3
console.log(numbers.sum()); // must return 15
console.log(numbers.even()); // must return [2, 4]
console.log(numbers.odd()); // must return [1, 3, 5]