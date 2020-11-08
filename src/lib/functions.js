export function checkObjectsArrayDuplicates(array, key){
	let seen = new Set();
	return array.some(object => {
		return seen.size === seen.add(object[key]).size;
	});
}

export function filterArrayFromDuplicates (array) {
	const uniq = new Set(array.map(e => JSON.stringify(e)));
	return Array.from(uniq).map(e => JSON.parse(e));
}