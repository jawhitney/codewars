function autocomplete(input, dictionary){
	input = input.replace(/[^a-zA-Z]/g, '').toLowerCase();

	return dictionary.filter(function(v) {
		return v.slice(0, input.length).toLowerCase() === input;
	}).slice(0,5);
}

console.log(autocomplete('a', ['airplane','airport','apple','ball'])); // ['airplane','airport']