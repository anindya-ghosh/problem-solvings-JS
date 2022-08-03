function memoize (memoFn, cacheSize = 10) {
	const memo = {};
	const keyOrder = [];
	function cacheBurstAndSet (key, result) {
		if (keyOrder.length === cacheSize) {
			const keyToBeRemoved = keyOrder.shift();
			delete memo[keyToBeRemoved];
		}
		memo[key] = result;
		keyOrder.push(key);
	};
	return (...params) => {
		const key = JSON.stringify(params);
		if (memo.hasOwnProperty(key)) {
			return memo[key];
		}
		const result = memoFn(...params);
		cacheBurstAndSet(key, result);
		return result;
	};
}