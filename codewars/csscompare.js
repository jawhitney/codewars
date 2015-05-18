function compare(a,b){
	var getSpecifity = function(array) {
		var specifity = [0, 0, 0]; // #id, .class, tagname

		array.split(' ').forEach(function(e) {
			e.split('').forEach(function(c) {
				if (c === '#') specifity[0]++;
				if (c === '.') specifity[1]++;
			});

			if (e.indexOf('#') === -1 && e.indexOf('.') === -1 && e.indexOf('*') === -1) {
				specifity[2]++;
			} else if (e.charAt(0) !== '#' && e.charAt(0) !== '.' && e.charAt(0) !== '*') {
				specifity[2]++;
			}
		});

		return specifity;
	};

	var sA = getSpecifity(a),
		sB = getSpecifity(b);

	console.log(sA, sB);

	if (sA[0] > sB[0]) {
		return a;
	} else if (sB[0] > sA[0]) {
		return b;
	}

	if (sA[1] > sB[1]) {
		return a;
	} else if (sB[1] > sA[1]) {
		return b;
	}

	if (sA[2] > sB[2]) {
		return a;
	} else if (sB[2] > sA[2]) {
		return b;
	}

	if (sA[0] === sB[0] && sA[1] === sB[1] && sA[2] === sB[2]) {
		return b;
	}
}

compare("body p", "div"); // "body p"
compare(".class", "#id"); // "#id"
compare("div.big", ".small"); // "div.big"
compare(".big", ".small"); // ".small"
compare("p", "*"); // "p"