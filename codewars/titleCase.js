function titleCase(title, minorWords) {
	var splitMinorWords = !minorWords ? [] : minorWords.split(' ').map(function(word) {
		return word.toLowerCase();
	});
	
	var titleNew = title.split(' ').map(function(word, i) {
		if (splitMinorWords.length != 0 &&
			i > 0 &&
			splitMinorWords.indexOf(word.toLowerCase()) >= 0) {
			return word.toLowerCase();
		}

		return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
	});

	return titleNew.join(' ');
}

console.log(titleCase('a clash of KINGS', 'a an the of')); // should return: 'A Clash of Kings'
console.log(titleCase('THE WIND IN THE WILLOWS', 'The In')); // should return: 'The Wind in the Willows'
console.log(titleCase('the quick brown fox')); // should return: 'The Quick Brown Fox'