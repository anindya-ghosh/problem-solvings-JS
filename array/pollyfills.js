Array.prototype.customReduce = function (callback, acc) {
	const _array = this;
	let accumulator = acc ?? _array[0];
	if (typeof callback !== 'function') {
		return accumulator;
	}
	for (let i = typeof acc !== "undefined" ? 0 : 1, len = _array.length; i < len; i++) {
		accumulator = callback.call(null, accumulator, _array[i], i, _array);
	}
	return accumulator;
};

Array.prototype.customFilter = function (callback) {
	const _array = this;
	const accumulator = [];
	if (typeof callback !== 'function') {
		return accumulator;
	}
	for (let i = 0, len = _array.length; i < len; i++) {
		if (callback.call(null, _array[i], i, _array)) {
			accumulator.push(_array[i]);
		}
	}
	return accumulator;
};
