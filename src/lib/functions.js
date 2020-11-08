export function checkObjectsArrayDuplicates(array, key) {
	let seen = new Set();
	return array.some(object => {
		return seen.size === seen.add(object[key]).size;
	});
}

export function filterArrayFromDuplicates(array) {
	const uniq = new Set(array.map(e => JSON.stringify(e)));
	return Array.from(uniq).map(e => JSON.parse(e));
}

export function downloadBlob(url) {
	return new Promise((resolve, reject) => {
		var xhr = new window.XMLHttpRequest();
		xhr.open('GET', url, true);
		xhr.responseType = 'blob';

		xhr.onload = function (e) {
			if (this.status === 200) {
				resolve(this.response);
			}
			else {
				reject(this.response);
			}
		}
		xhr.send();
	});
};
