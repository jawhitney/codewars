function meters(m) {
	var prefixes = [
		{ "symbol": "", "power": 0 },
		{ "symbol": "k", "power": 1 },
		{ "symbol": "M", "power": 2 },
		{ "symbol": "G", "power": 3	},
		{ "symbol": "T", "power": 4	},
		{ "symbol": "P", "power": 5	},
		{ "symbol": "E", "power": 6	},
		{ "symbol": "Z", "power": 7	},
		{ "symbol": "Y", "power": 8	}
	];

	for (var i = 0; i < prefixes.length; i++) {
		if (m % Math.pow(1000, prefixes[i]["power"] + 1) === m) {
			return (m / Math.pow(1000, prefixes[i]["power"])) + prefixes[i]["symbol"] + 'm';
		}
	}
}

console.log(meters(5)); // 5m
console.log(meters(51500)); // 51.5km
console.log(meters(5000000)); // 5Mm