Array.prototype.groupBy = function(fn) {
	var origninal = this,
		result = {};

	if (typeof fn === 'undefined') {
		this.forEach(function(v, i, a) {
			result[v] = a.filter(function(e) {
				return e === v;
			});
		});
	} else {
		this.map(fn).forEach(function(v, i, a) {
			var temp = [];

			a.filter(function(e, n) {
				if (e === v) {
					temp.push(origninal[n]);
				}
			 	return e === v;
			});

			result[v] = temp;
		});
	}

	return result;
};

// Array.prototype.groupBy = function(fn) {
//   return this.reduce(function(o, a){
//     var v = fn ? fn(a) : a;
//     return (o[v] = o[v] || []).push(a), o;
//   }, {});
// };

[1,2,3,2,4,1,5,1,6].groupBy();
[1,2,3,2,4,1,5,1,6].groupBy(function(val) { return val % 3; });
['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten'].groupBy(function(_) {return _.length;});