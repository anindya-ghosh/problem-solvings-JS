const findZeroSumExist = (arr) => {
	const set = new Set();
	for (let i= 0, sum = 0, len = arr.length; i < len; i++) {
		sum += arr[i];
		if (sum === 0 && set.has(sum)) {
			return true;
		}
		set.add(sum);
	}
	return false;
}


const findSubArrayWithZeroSum = (_array) => {
	const set = {};
	const out = [];
	for (let i = 0, sum = 0, len = _array.length; i < len; i++) {
		sum += _array[i];
		if (sum === 0) {
			out.push([0, i]);
		}
		if (set.hasOwnProperty(sum)) {
			set[sum]?.forEach(el => out.push([el + 1, i]));
		} else {
			set[sum] = [];
		}
		set[sum].push(i);
	}
	return out;
}