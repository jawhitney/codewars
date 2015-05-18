function say(a) {
	return function (b) {
		return a + ' ' + b;
	};
}

console.log(say('hello')('world'));
