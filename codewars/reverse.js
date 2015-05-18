function reverseString(str) {
	if(str.length <= 1) return str;
		return reverseString(str.substring(1)) + str.charAt(0);
}

console.log(reverseString('hello world'));

Array.prototype.reverse = function() {
	if (this.length === 0) {
		return this;
	}

	var r = this.slice(0);

	for (var i = this.length; i > 0; i--) {
		this[this.length - i] = r[i - 1];
	}

	return this;
};

console.log([1,2,3,4,5].reverse());
