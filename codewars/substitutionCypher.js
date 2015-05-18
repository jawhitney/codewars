function SubstitutionCipher(abc1, abc2) {
	this.encode = function (str) {
		return substitute(str, 'encode');
	}
	this.decode = function (str) {
		return substitute(str, 'decode');
	}

	var substitute = function(str, cypher) {
		var result = '',
			a = '',
			b = '';

		if (cypher == 'encode') {
			a = abc1;
			b = abc2;
		} else if (cypher == 'decode') {
			a = abc2;
			b = abc1;
		}

		for (var i = 0; i < str.length; i++) {
			var v = a.indexOf(str.substring(i, i + 1));

			result += v != -1 ? b.substring(v, v + 1) : str.substring(i, i + 1);
		}

		return result;
	}
}

var abc1 = "abcdefghijklmnopqrstuvwxyz";
var abc2 = "etaoinshrdlucmfwypvbgkjqxz";
var sub = new SubstitutionCipher(abc1, abc2);

console.log(sub.encode("abc")); // => "eta"
console.log(sub.encode("xyz")); // => "qxz"
console.log(sub.encode("aeiou")); // => "eirfg"

console.log(sub.decode("eta")); // => "abc"
console.log(sub.decode("qxz")); // => "xyz"
console.log(sub.decode("eirfg")); // => "aeiou"

console.log(sub.encode("a1b2c3")); // => "aeiou"
