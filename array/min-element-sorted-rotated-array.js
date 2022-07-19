/**
 * Find the minimum element in a sorted and rotated array
 */

/**
 * Input: [5, 6, 1, 2, 3, 4]
 * Output: 1
 * -------------------------
 * Input: [1, 2, 3, 4]
 * Output: 1
 * -------------------------
 * Input: [2, 1]
 * Output: 1
 */

const getMinInSortedRotatedArray = (_array) => {
	let start = 0;
	let end = _array.length - 1;
	if (_array[start] <= _array[end]) {
		return _array[start]; // non-rotated sorted array
	}
	let mid = start;
	while (start <= end) {
		mid = Math.floor(start + (end - start) / 2);
		if (_array[mid - 1] >= _array[mid] && _array[mid] <= _array[mid + 1]) {
			return _array[mid];
		} else if (Math.abs(start - end) === 1) {
			return Math.min(_array[start], _array[end]);
		}
		if (_array[start] <= _array[mid]) {
				start = mid + 1;
		} else {
			end = mid;
		}
	}
};

const findMinInSortedRotatedArray = (_array) => {
	let start = 0,
		mid = 0,
		end = _array.length - 1;
	while (start < end) {
		mid = Math.floor((start + end) / 2);
		if (_array[mid] >= _array[end]) {
			start = mid + 1;
		} else {
			end = mid;
		}
	}
	return _array[start];
}