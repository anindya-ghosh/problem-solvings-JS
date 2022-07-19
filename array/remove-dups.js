/**
 * ['A', 'B', 'A', 'C', 'B']
 */

const getUnique = (_array) => {
	const set = new Set();
	return _array.filter((value) => {
		if (set.has(value)) {
			return false;
		}
		set.add(value);
		return true;
	})
}