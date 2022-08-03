/** input [3,0,2,0,4] => trapped rain water 7 unit **/

const findTrappedRainWater = (_array) => {
	const len = _array.length;

	const leftMaxBarMap = new Array(len);
	leftMaxBarMap[0] = _array[0];
	for (let i = 1; i < len; i++) {
		if (_array[i] > leftMaxBarMap[i - 1]) {
			leftMaxBarMap[i] = _array[i];
		} else {
			leftMaxBarMap[i] = leftMaxBarMap[i - 1];
		}
	}

	const rightMaxBarMap = new Array(len);
	rightMaxBarMap[len - 1] = _array[len - 1];
	for (let i = len - 2; i  >= 0; i--) {
		if (_array[i] > rightMaxBarMap[i + 1]) {
			rightMaxBarMap[i] = _array[i];
		} else {
			rightMaxBarMap[i] = rightMaxBarMap[i + 1];
		}
	}

	let result = 0;
	for (let i = 0; i < len; i++) {
		result += Math.min(leftMaxBarMap[i], rightMaxBarMap[i]) - _array[i];
	}
	return result;
}