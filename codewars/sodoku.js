var validBoard = [[5, 3, 4, 6, 7, 8, 9, 1, 2],
			[6, 7, 2, 1, 9, 5, 3, 4, 8],
			[1, 9, 8, 3, 4, 2, 5, 6, 7],
			[8, 5, 9, 7, 6, 1, 4, 2, 3],
			[4, 2, 6, 8, 5, 3, 7, 9, 1],
			[7, 1, 3, 9, 2, 4, 8, 5, 6],
			[9, 6, 1, 5, 3, 7, 2, 8, 4],
			[2, 8, 7, 4, 1, 9, 6, 3, 5],
			[3, 4, 5, 2, 8, 6, 1, 7, 9]];

var invalidBoard = [[5, 3, 4, 6, 7, 8, 9, 1, 2], 
					[6, 7, 2, 1, 9, 0, 3, 4, 9],
					[1, 0, 0, 3, 4, 2, 5, 6, 0],
					[8, 5, 9, 7, 6, 1, 0, 2, 0],
					[4, 2, 6, 8, 5, 3, 7, 9, 1],
					[7, 1, 3, 9, 2, 4, 8, 5, 6],
					[9, 0, 1, 5, 3, 7, 2, 1, 4],
					[2, 8, 7, 4, 1, 9, 6, 3, 5],
					[3, 0, 0, 4, 8, 1, 1, 7, 9]];

function construct(board) {
	var checkObject = {};
	for (var i = 0; i < board.length; i++) {
		var currentRow = board[i];

		checkObject['row' + i] = currentRow;
		for (var j = 0; j < currentRow.length; j++) {
			if (!checkObject.hasOwnProperty('column' + j)) checkObject['column' + j] = [];
			checkObject['column' + j][i] = currentRow[j];

			// var region, index;
			// if (j < 3) {
			// 	region = i;
			// 	index = j;
			// } else if (j > 2 && j < 6) {
			// 	region = i + 1;
			// 	index = j - 3;
			// } else if (j > 5 && j < 9) {
			// 	region = i + 2;
			// 	index = j - 6;
			// }

			var region, index;
			if (i < 3) {
				if (j < 3) {
					region = 0;
					index = j;
				} else if (j > 2 && j < 6) {
					region = 1;
					index = j - 3;
				} else if (j > 5 && j < 9) {
					region = 2;
					index = j - 6;
				}
			} else if (i > 2 && i < 6) {
				if (j < 3) {
					region = 3;
					index = j;
				} else if (j > 2 && j < 6) {
					region = 4;
					index = j - 3;
				} else if (j > 5 && j < 9) {
					region = 5;
					index = j - 6;
				}
			// } else if (i > 5 && i < 9) {
			// 	if (j < 3) {
			// 		region = 6;
			// 	} else if (j > 2 && j < 6) {
			// 		region = 7;
			// 	} else if (j > 5 && j < 9) {
			// 		region = 8;
			// 	}
			}

			if (!checkObject.hasOwnProperty('region' + region)) checkObject['region' + region] = [];
			if (typeof checkObject['region' + region][index] === 'undefined') {
				checkObject['region' + region][index] = currentRow[j];
			}			
		}
	}
	return checkObject;
}

function checkRow(p, c, i, a) {
	if (p.indexOf(c) < 0) p.push(c);
	return p;
}

function doneOrNot(board) {
	var valid = true;

	for (var i = 0; i < board.length; i++) {
		var currentRow = board[i],
			reducedRow = currentRow.reduce(checkRow, []);

		if (reducedRow.length != currentRow.length) valid = false;
	}

	return valid;
}

var isValid = doneOrNot(validBoard);

console.log('Board is valid: ' + isValid);

var isNotValid = doneOrNot(invalidBoard);

console.log('Board is valid: ' + isNotValid);

console.log(construct(validBoard));