function sort(arr, compare) {
	if (typeof compare != 'function') {
		compare = function(a, b) {
			console.log(123);
			return a - b;
		}
	}

	var i,j,a,b;

	for (i = arr.length - 1; i >= 0; i--) {
		for (j = i - 1; j >= 0; j--) {
			a = arr[i];
			b = arr[j];
			
			if (compare(a, b) < 0) {
				arr[i] = b;
				arr[j] = a;
			}
		}
	}
}

function quickSort(arr) {
	if (arr.length <= 1) {
		return arr;
	}

	var compare = function(a, b) {
		console.log(123);
		return a - b;
	}

	var left = [];
	var right = [];
	var mid = arr[0];
	var a, i, len;

	for (i = 1, len = arr.length; i < len; i++) {
		a = arr[i];

		if (compare(mid, a) < 0) {
			right.push(a);
		} else {
			left.push(a);
		}
	}

	return quickSort(left).concat([mid], quickSort(right));
}