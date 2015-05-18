function elapsedSeconds(startDate, endDate){
	return (endDate - startDate) / 1000;
}

var start = new Date(2014, 11, 30, 1, 0);
var end = new Date(2014, 11, 30, 1, 1);

console.log(elapsedSeconds(start, end));
