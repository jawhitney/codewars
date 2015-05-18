// Array.prototype.duplicate = function() {
// 	if (this.length === 0) {
// 		return this;
// 	}

// 	var clone = this.slice(0);

// 	for (var i = 0; i < clone.length; i++) {
// 		this.push(clone[i]);
// 	}

// 	return this;
// };

function duplicate(a) {
	return a.reduce(function(pv, cv, i, array) {
		return pv.concat(cv);
	}, a);
}

// console.log([1,2,3,4,5].duplicate());

console.log(duplicate([1,2,3,4,5]));
